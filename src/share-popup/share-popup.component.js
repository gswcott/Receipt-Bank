import template from "./share-popup.component.html";
import { NavBarComponent } from "../shared/navbar/navbar.component";
export class SharePopupComponent{
    constructor(){
    }
    display(selector){
        document.querySelector(selector).innerHTML = template; 
        this.displayNavBar();
    }
    displayNavBar(){
        const navbar = new NavBarComponent(); 
        navbar.display("header");
    }
}
