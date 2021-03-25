import template from "./list-receipt.component.html";
import { NavBarComponent } from "../shared/navbar/navbar.component";
import { DetailComponent } from "../detail/detail.component";
import { FooterComponent } from "../shared/footer/footer.component"; 

export class ListReceiptComponent{
    constructor(){
    }
    display(selector){
        document.querySelector(selector).innerHTML = template; 
        this.displayNavBar();
        this.displayFooter();
        const dictReceipts=JSON.parse(localStorage.receiptBank01); 
        this.displayAllFiles(dictReceipts); 
        document.querySelector(".trash").onclick = (e) =>{
            this.deleteFiles(); 
            e.preventDefault();
        }
        document.querySelector(".detail").onclick = (e) =>{
            const checkboxes = document.querySelectorAll('input[type="checkbox"]');
            const checked= Object.values(checkboxes).filter(checkbox => checkbox.checked);
            if(checked.length>0){
                this.displayDetail(checked.pop().value);
            }
            e.preventDefault();
        } 
    }
    deleteFiles(){
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const checked = Object.values(checkboxes).filter(checkbox => checkbox.checked);
        if(checked.length>0){
            const dictReceipts=JSON.parse(localStorage.receiptBank01);
            checked.forEach((item)=>{
                delete dictReceipts[item.getAttribute("value")]; 
            })
            localStorage.receiptBank01=JSON.stringify(dictReceipts);
            document.querySelector("form").innerHTML=""; 
            this.displayAllFiles(dictReceipts);
        } 
    }

    displayNavBar(){
        const navbar = new NavBarComponent(document.querySelector("header"));
        navbar.display(); 
    }
    displayAllFiles(dictReceipts){
        for(let key in dictReceipts){
            this.addFile(key); 
        }
    }
    addFile(name){
        const formElem = document.querySelector("form"); 
        formElem.innerHTML = formElem.innerHTML+ `
        <p>
            <label>
                <input type="checkbox" value =${name} />
                <span >${name}</span>
            </label>
        </p>
        `;
    }
    displayDetail(file){
        const detail = new DetailComponent(); 
        detail.display("main", file); 
    }
    displayNavBar(){
        const navbar = new NavBarComponent(); 
        navbar.display("header");
    }
    displayFooter(){
        const footer = new FooterComponent(); 
        footer.display("footer"); 
    }
}