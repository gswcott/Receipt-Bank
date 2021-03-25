
import "materialize-css";
import { HomeComponent } from "./home/home.component"; 

if(window.cordova){
    document.addEventListener("deviceready", ()=>{
        const home = new HomeComponent(); 
        home.display("main"); 
    }); 
}else{
    const home = new HomeComponent(); 
    home.display("main"); 
}


// import { ResultComponent } from "./result/result.component"; 
// const result = new ResultComponent(); 
// result.display("main"); 

// import { NewDataComponent } from "./new-data/new-data.component"; 
// const newData = new NewDataComponent(); 
// newData.display("main"); 
