import template from "./assist.component.html";
import {NavBarComponent} from "../shared/navbar/navbar.component";
export class AssistComponent {
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
