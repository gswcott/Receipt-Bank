import template from "./detail.component.html";
import { ReceiptService } from "../shared/services/receipt.service";
import {NavBarComponent} from "../shared/navbar/navbar.component";
export class DetailComponent{
    constructor(){ 
    }
    display(selector, file){
        document.querySelector(selector).innerHTML = template;
        this.displayNavBar();  
        this.affectValues(file); 
    }
    affectValues(file){
        const lstReceipts=JSON.parse(localStorage.receiptBank01); 
        const selectedReceipt = lstReceipts[file]; 
        for(let key in selectedReceipt){
            ReceiptService.setValue(key, selectedReceipt[key]); 
        }
        document.querySelector(".img-facture").src = ReceiptService.getValue("imgSrc"); 
        const list = document.querySelectorAll(".value"); 
        list.forEach((divElem) => {
            divElem.innerText = ReceiptService.getValue(divElem.getAttribute("data-name")); 
        })
    }
    displayNavBar(){
        const navbar = new NavBarComponent(); 
        navbar.display("header");
    }
}