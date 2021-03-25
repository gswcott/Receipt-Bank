import template from "./new-data.component.html";
import { CameraComponent } from "../camera/camera.component";
import { ResultComponent } from "../result/result.component";
import { NavBarComponent } from "../shared/navbar/navbar.component";
import { PictureService } from "../shared/services/picture.service";

export class NewDataComponent {
  constructor(){
    this.src = PictureService.getSrc();
  }
  display(selector){
    document.querySelector(selector).innerHTML = template;
    this.displayNavBar();
    document.querySelector("img").src = this.src; 
    const closeBtn = document.querySelector(".btn-floating.btn-large.waves-effect.waves-light.green");
    closeBtn.onclick = () => {
      this.displayCamera();
    }
    const analyseBtn = document.querySelector(".waves-effect.waves-light.btn");
    analyseBtn.onclick = () =>{
      this.displayResult(); 
    }
    M.Sidenav.init(document.querySelectorAll("select"));
  }
  chooseCriteria(){

  }
  displayResult(){
    const result = new ResultComponent(); 
    result.display("main");
  }
  displayCamera(){
    const camera = new CameraComponent(); 
    camera.display("main");
  }
  displayNavBar(){
    const navbar = new NavBarComponent(); 
    navbar.display("header");
  }
}
