import template from "./home.component.html";
import {CameraComponent} from "../camera/camera.component";
import {NavBarComponent} from "../shared/navbar/navbar.component";
import { ListReceiptComponent } from "../list-receipt/list-receipt.component";
export class HomeComponent{
    constructor(){
    }
    display(selector){
        document.querySelector(selector).innerHTML = template; 
        this.displayNavBar();
        this.addFolderBtnOnNavBar();
        this.displayFooter();
        document.querySelector(".take-picture").onclick = () =>{
            this.displayCamera();
        }
        document.querySelector(".right").onclick = (e) =>{
            this.addFolder();
            e.preventDefault();
        }
        document.querySelector(".waves-effect").onclick = (e) =>{
            this.openFolder();
            e.preventDefault();
        }
    }
    addFolderBtnOnNavBar(){
        const nav = document.querySelector(".nav-wrapper"); 
        //const div = document.createElement("div");
        const a = document.createElement("a");
        const i = document.createElement("i");
        const text = document.createTextNode("add_circle_outline");
        i.append(text); 
        i.setAttribute("class", "material-icons"); 
        a.append(i); 
        a.setAttribute("href", "#"); 
        //div.append(a); 
        a.setAttribute("class", "sidenav-trigger right"); 
        nav.append(a); 
    }
    addFolder(){
        const eleDiv0 = document.createElement("div");
        const eleDiv1 = document.createElement("div");
        const eleA = document.createElement("a");
        const text = document.createTextNode("Dossier");
        eleA.append(text);
        eleA.className = "waves-effect waves-teal btn-flat";
        eleDiv1.append(eleA);
        eleDiv1.className = "card-panel teal";
        eleDiv0.append(eleDiv1);
        eleDiv0.className = "col s6 m4";
        document.querySelector(".row").append(eleDiv0);
    }
    openFolder(){
        const listReceipt = new ListReceiptComponent();
        listReceipt.display("main"); 
    }
    displayCamera(){
        const camera = new CameraComponent(); 
        camera.display("main");
    }
    displayNavBar(){
        const navbar = new NavBarComponent(); 
        navbar.display("header");
    }

    displayFooter(){
        const footer = document.querySelector("footer"); 
        footer.innerHTML=""; 
    }

}


