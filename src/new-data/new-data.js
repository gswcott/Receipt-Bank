import { displayCamera } from "../camera/camera";
import template from "./new-data.html";
import Tesseract from 'tesseract.js';
import { displayResult} from "../result/result";
export const displayNewData = (element, src) => {
    //console.log("src importé : ", src);
    element.innerHTML = template;
    const photo = document.querySelector("img");
    photo.src = src;
    photo.src = "./images/factureExample1.jpg";
    //console.log(photo);
    M.Sidenav.init(document.querySelectorAll("select"));
    const closeBtn = document.querySelector(".btn-floating.btn-large.waves-effect.waves-light.green");
    closeBtn.onclick = () => {
        displayCamera(element);
    }
    const analyseBtn = document.querySelector(".waves-effect.waves-light.btn");
    analyseBtn.onclick = () => {
        const loader = document.querySelector(".preloader-wrapper");
        console.log(loader);
        loader.innerHTML=`
        <div class="spinner-layer spinner-green-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>`
        analyseBtn.classList.add("disabled");
        Tesseract.recognize(
            photo.src,
            'fra',
            { logger: m => {
                    console.log(m);
                    if (m.status=="recognizing text" && m.progress==1) {
                        console.log("finished !");
                    }
                } 
            })
            .then(({ data: { text } }) => {
                    loader.innerHTML=" ";
                    console.log("coucou", text);
                    displayResult(element, text);
            })
    }
};
