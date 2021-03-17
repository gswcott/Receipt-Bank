//import { displayImportPhoto } from "../../import-photo/import-photo";
//import { displayAssist } from "../../assist/assist";
import { displayHome } from "../../home/home";
import template from "./navbar.html";

export const displayNavBar = (element) => {
    element.innerHTML = template; 
    M.Sidenav.init(document.querySelectorAll(".sidenav"));
    const logo = document.querySelector(".brand-logo"); 
    logo.onclick = () =>{
        displayHome(document.querySelector("main"));
    }; 
    const listNavBar = document.querySelectorAll(".link"); 
    listNavBar.forEach((linkEle) =>{
        linkEle.onclick = () =>{
            //console.log(linkEle.getAttribute("data-link"));
            const fn = window[linkEle.getAttribute("data-link")]; 
            fn(document.querySelector("main"));
            /*
            if("Import a photo" === linkEle.innerText){
                displayImportPhoto(document.querySelector("main"));
            }else if ("Assistance" === linkEle.innerText){
                displayAssist(document.querySelector("main"));
            }*/
        };
    }); 
};