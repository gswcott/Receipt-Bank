import template from "./import-photo.component.html";
import { NavBarComponent } from "../shared/navbar/navbar.component";
import { NewDataComponent } from "../new-data/new-data.component";
import { PictureService } from "../shared/services/picture.service";

export class ImportPhotoComponent {
    constructor() {
    }
    display(selector) {
        document.querySelector(selector).innerHTML = template;
        this.displayNavBar();
        const inputElement = document.querySelector(".input-file");
        //const inputPath = document.querySelector(".file-path"); 
        inputElement.addEventListener("change", () => {
            const file = inputElement.files[0];
            this.handleFile(file);
        }, false);
    }

    handleFile(file) {
        if (file.type.startsWith('image/')) {
            const img = document.querySelector(".img-fit");
            img.file = file;
            //console.log(img.file);
            const reader = new FileReader();
            //reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result;}; })(img);
            reader.onload = (e) => {
                img.src = e.target.result;
                if (img.src) {
                    this.addValidateBtn();
                }
            };
            reader.readAsDataURL(file);
        }
    }
    addValidateBtn() {
        const container = document.querySelector(".container");
        container.innerHTML = container.innerHTML + `
            <div class ="row below ta-c">
                <div class="col s12">
                    <a class="btn-floating btn-large waves-effect waves-light green"><i
                        class="material-icons">done</i></a>
                </div>
            </div>
            `;
        const validBtn = document.querySelector(".btn-floating"); 
        //console.log(validBtn);
        validBtn.onclick = (e) =>{
            this.validate();
            e.preventDefault();
        }
    }
    validate() {
        const img = document.querySelector(".img-fit");
        PictureService.setSrc(img.src);
        this.displayNewData();
    }
    displayNewData() {
        const newData = new NewDataComponent();
        newData.display("main");
    }
    displayNavBar() {
        const navbar = new NavBarComponent();
        navbar.display("header");
    }
}
