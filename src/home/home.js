import { displayCamera } from "../camera/camera";
import { displayNavBar } from "../shared/navbar/navbar";
import template from "./home.html";
export const displayHome = (element) => {
    element.innerHTML = template; 
    displayNavBar(document.querySelector("header"));
    const cameraBtn = document.querySelector(".action"); 
    cameraBtn.onclick = (e) => {
        displayCamera(element);
    }
}
