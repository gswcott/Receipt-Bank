import template from "./picture.html";
import { displayNewData } from "../new-data/new-data";
import { displayCamera } from "../camera/camera";
export const displayPicture = (element, src) => {
    element.innerHTML = template;
    const photo = document.querySelector("img");
    photo.src = src;
    const trashBtn = document.querySelector(".trash");
    const validBtn = document.querySelector(".valid");
    trashBtn.onclick = () => {
        displayCamera(element);
    }
    validBtn.onclick = () => {
        const imgSrc = photo.src;
        displayNewData(element, imgSrc);
    }
};