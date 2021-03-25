import template from "./camera.component.html";
import { PictureComponent } from "../picture/picture.component";
import { HomeComponent } from "../home/home.component";
import { NavBarComponent } from "../shared/navbar/navbar.component";
import { CanvasService } from "../shared/services/canvas.service";
import { PictureService } from "../shared/services/picture.service";
import { MediaService } from "../shared/services/media.service";

export class CameraComponent {
    constructor() {
        this.error = null;
    }
    display(selector) {
        this.displayNavBar()
        if (!window.cordova) {
            this.activeCamera();
        } else {
            this.grantPermission();
        }
    }
    displayBlack(selector){
        document.querySelector(selector).innerHTML = `<div class="blackMain"></div>`;
    }
    grantPermission() {
        cordova.plugins.diagnostic.requestRuntimePermission(
        () =>{
            this.activeCamera()
        },
        (error) => {
            this.reactivate(); 
        }, cordova.plugins.diagnostic.permission.CAMERA);
    }
    takePicture() {
        const video = document.querySelector('video');
        CanvasService.draw(video.videoWidth, video.videoHeight, video, 0, 0, video.videoWidth, video.videoHeight);
        PictureService.setSrc(CanvasService.getCanvasElement().toDataURL("image/png"));
        this.displayPicture();
    }

    displayPicture() {
        const picture = new PictureComponent();
        picture.display("main");
    }

    displayHome() {
        const home = new HomeComponent();
        home.display("main");
    }
    activeCamera() {
        this.displayBlack("main");
        MediaService.startCamera()
            .then((stream) => {
                    const mainDiv = document.querySelector('main');
                    const video = document.createElement("video");
                    video.setAttribute("class", "webcam"); 
                    const can = document.createElement("canvas");
                    const div = document.createElement("div");
                    const btn = document.createElement("button");
                    const span = document.createElement("span");
                    const icon = document.createTextNode("camera");
                    div.setAttribute("class", "action"); 
                    btn.setAttribute("class", "take-picture"); 
                    span.setAttribute("class", "material-icons"); 
                    span.appendChild(icon); 
                    btn.appendChild(span);
                    div.appendChild(btn);
                    if ("srcObject" in video) {
                        video.srcObject = stream;
                    } else {
                        video.src = window.URL.createObjectURL(stream);
                    }
                    video.onloadedmetadata = (e) => {
                        e.preventDefault();
                        video.play();
                        mainDiv.innerHTML="";
                        mainDiv.appendChild(video); 
                        mainDiv.appendChild(can); 
                        mainDiv.appendChild(div); 
                        const takePictureBtn = document.querySelector(".take-picture");
                        takePictureBtn.onclick = () => {
                            this.takePicture();
                        }

                        // setInterval(function(){ 
                        //     mainDiv.innerHTML = `${mainDiv.innerHTML}${template}`;
                        //     console.log(video);
                        //     //console.log(mainDiv.innerHTML); 
                        //     const takePictureBtn = document.querySelector(".take-picture");
                        //     console.log(takePictureBtn);
                        //     console.log(mainDiv);
                        //     takePictureBtn.onclick = () => {
                        //         this.takePicture();
                        //     }
                        // }, 3000);
                    };
            })
            .catch((err) => {
                if(!window.cordova){
                    this.displayHome(); 
                }
            })
    }

    displayNavBar() {
        const header = document.querySelector('header');
        header.innerHTML="";
    }

    reactivate() {
        console.log('reactivate');
        const elems = document.querySelector('.modal');
        const modal = M.Modal.init(elems);
        const tryAgain = document.querySelector(".tryAgain");
        const activate = document.querySelector(".activate");
        tryAgain.style.visibility = "visible";
        modal.open();
        activate.addEventListener("click", () => {
            this.grantPermission();
        }, false);
    }
}
