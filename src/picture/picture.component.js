import template from "./picture.component.html";
import { CameraComponent } from "../camera/camera.component";
import { NewDataComponent } from "../new-data/new-data.component";
import { NavBarComponent } from "../shared/navbar/navbar.component";
import { PictureService } from "../shared/services/picture.service";

export class PictureComponent {
    constructor(){
        //PictureService.setSrc("./images/factureExample2.png"); 
        this.src = PictureService.getSrc();
    }
    display(selector){
        document.querySelector(selector).innerHTML = template; 
        this.displayNavBar();
        document.querySelector("img").src = this.src;
        document.querySelector(".trash").onclick = (e) =>{
            this.displayCamera(); 
            e.preventDefault();
        }
        document.querySelector(".valid").onclick = (e) =>{
            this.validate();
            e.preventDefault();
        } 
    }
    validate(){
        this.displayNewData(); 
    }
    displayNewData(){
        const newData = new NewDataComponent(); 
        newData.display("main"); 
    }
    displayCamera(){
        const camera = new CameraComponent(); 
        camera.display("main");
    }
    displayNavBar(){
        const navbar = new NavBarComponent();
        navbar.display("header"); 
    }
}