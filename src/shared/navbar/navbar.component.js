
import {HomeComponent} from "../../home/home.component";
import {ImportPhotoComponent} from "../../import-photo/import-photo.component";
import {AssistComponent} from "../../assist/assist.component";
import template from "./navbar.component.html";


export class NavBarComponent {
    constructor() {
    }
    display(selector) {
        document.querySelector(selector).innerHTML = template;
        M.Sidenav.init(document.querySelectorAll(".sidenav"));
        document.querySelector(".brand-logo").onclick = () => {
            this.displayHome();
        }
        this.actionLink();
    }
    displayHome() {
        const home = new HomeComponent();
        home.display("main");
    }
    actionLink() {
        const listNavBar = document.querySelectorAll(".link");
        listNavBar.forEach((linkEle) => {
            linkEle.onclick = () => {
                if("Import a photo" === linkEle.innerText){
                    const importPhoto = new ImportPhotoComponent(); 
                    importPhoto.display("main"); 
                }else if ("Assistance" === linkEle.innerText){
                    const assist = new AssistComponent(); 
                    assist.display("main"); 
                }
            }
        })
    }
}
