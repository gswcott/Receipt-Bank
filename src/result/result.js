import template from "./result.html";
export const displayResult = (element, txt) => {
    element.innerHTML = template; 
    console.log(JSON.stringify(txt));
    const divText=document.querySelector(".text"); 
    const p=document.createElement("p"); 
    const text = document.createTextNode(txt);
    p.append(text);
    divText.append(p);
    const re =/TOTAL\s+TVA/g; 
    //const re1 = /TOTAL/g; 
    console.log(txt.match(re));
    //console.log(txt.match(re1));
    if(!txt.match(re)){
        alert("Please take a new photo!"); 
    }
    const arrayTxt = txt.split("\n");
    arrayTxt.forEach((line) =>{
        if(line.match(re)){
            console.log(line);
        }
    })
};