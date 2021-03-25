import template from "./footer.component.html";
export class FooterComponent{
    constructor(){

    }
    display(selector){
        document.querySelector(selector).innerHTML = template; 
    }
}