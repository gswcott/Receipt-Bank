export class MediaService{
    constructor(){
    }
    static startCamera(){
        return navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
        }); 
    }
}

// { facingMode: { exact: "environment" }}