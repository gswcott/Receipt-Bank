import template from "./camera.html";
import { displayPicture} from "../picture/picture"


const takePicture = (element) =>{
  const video = document.querySelector('video');
  const canvas = document.querySelector("canvas");
  canvas.height = video.videoHeight; 
  canvas.width = video.videoWidth; 
  canvas.getContext("2d").drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  //photo.src = canvas.toDataURL("image/png");
  displayPicture(element, canvas.toDataURL("image/png"));
}

const displayMedia = (element) =>{
  /*  video: {
    width: { min: 1024, ideal: 1280, max: 1920 },
    height: { min: 576, ideal: 720, max: 1080 }
  }*/
  navigator.mediaDevices.getUserMedia({audio: false, video: true})
  .then((stream) => {
    const video = document.querySelector('video');
    // Older browsers may not have srcObject
    if ("srcObject" in video) {
      video.srcObject = stream;
    } else {
      // Avoid using this in new browsers, as it is going away.
      video.src = window.URL.createObjectURL(stream);
    }
    const takePictureBtn = document.querySelector(".action");
    takePictureBtn.innerHTML=`
    '<button class="take-picture"><span class="material-icons">camera</span></button>'
    `;
    takePictureBtn.onclick = () =>{
      takePicture(element); 
    }
  })
  .catch(function(err) {
    console.log(err.name + ": " + err.message);
    if(err.name === "NotAllowedError"){
      const requireBtn = document.querySelector(".center-align");
      requireBtn.innerHTML=`
        <a class="btn-floating btn-large waves-effect waves-light camera"><i
        class="material-icons">require autorisation</i></a>
      `;
      requireBtn.onclick = (e) => {
        console.log("require autorisation again");
        displayMedia();
      };
    }
  })
}; 


export const displayCamera = (element) => {
  element.innerHTML = template;
  displayMedia(element);
  //const photo = document.querySelector("img");
  //const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  /*photo.onclick = () =>{
    console.log("coucou");
    displayPicture(element, photo.src);
  }*/
}


