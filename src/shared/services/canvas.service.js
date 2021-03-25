export class CanvasService{
    constructor(){
    }; 
    static getCanvasElement(){
        this.elem = document.querySelector("canvas");
        if(!this.elem){
            throw new Error("L'élément canvas n'est pas dispo!");
        }
        return this.elem;
    }
    static setCanvasSize(width, height){
        const elem=this.getCanvasElement();
        elem.width = width; 
        elem.height = height; 
    }
    static draw(width, height, src, x0, y0, x1, y1) {
        this.setCanvasSize(width, height); 
        this.elem.getContext("2d").drawImage(src, x0, y0, x1, y1);
    }
}

