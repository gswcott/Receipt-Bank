import "materialize-css";
import { displayNavBar } from "./shared/navbar/navbar"; 
import { displayAssit } from "./assist/assist"; 
import { displayHome } from "./home/home"; 
import { displayImportPhoto } from "./import-photo/import-photo"; 
import { displayInformations} from "./informations/informations"; 
import { displayMyData } from "./my-data/my-data"; 
import { displayNewData } from "./new-data/new-data"; 
import { displaySettings } from "./settings/settings"; 
import { displaySharePopup } from "./share-popup/share-popup"; 


displayNavBar(document.querySelector("header")); 
// displayAssit(document.querySelector("main")); 
// displayHome(document.querySelector("main")); 
//displayImportPhoto(document.querySelector("main")); 
// displayInformations(document.querySelector("main")); 
// displayMyData(document.querySelector("main")); 
displayNewData(document.querySelector("main")); 
// displaySettings(document.querySelector("main")); 
// displaySharePopup(document.querySelector("main")); 