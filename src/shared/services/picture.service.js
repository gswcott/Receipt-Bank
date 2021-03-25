import { Picture } from "../models/picture.model";
const picture = new Picture();
export class PictureService{
    constructor(){}
    static getSrc(){
        return picture.src;
    }
    static setSrc(src){
        picture.src = src; 
    }
}

