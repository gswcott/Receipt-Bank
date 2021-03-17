
import "materialize-css";
import { displayNavBar } from "./shared/navbar/navbar"; 
import { displayAssit } from "./assist/assist"; 
import { displayCamera } from "./camera/camera"; 
import { displayHome } from "./home/home"; 
import { displayImportPhoto } from "./import-photo/import-photo"; 
import { displayInformations} from "./informations/informations"; 
import { displayMyData } from "./my-data/my-data"; 
import { displayNewData } from "./new-data/new-data"; 
import { displaySettings } from "./settings/settings"; 
import { displaySharePopup } from "./share-popup/share-popup"; 
import { displayResult } from "./result/result"; 


displayNavBar(document.querySelector("header")); 
// displayAssit(document.querySelector("main")); 
// displayCamera(document.querySelector("main")); 
displayHome(document.querySelector("main")); 
// displayImportPhoto(document.querySelector("main")); 
// displayInformations(document.querySelector("main")); 
// displayMyData(document.querySelector("main")); 
// displayNewData(document.querySelector("main")); 
// displaySettings(document.querySelector("main")); 
// displaySharePopup(document.querySelector("main")); 

/*
//const text = "IG ILGFIIUIIE - VIJIéTé . *\nSIRET 51685026)400029 - HAF 47110\nTUÀ FR1351850604\ndpérateur Date Heure [PU ficket\n101 1/ 06/02/21 12:43 / 916966\n>»>CHRRB.TRHÏT.SËUC.SECSML\nGRAND RAUT.CEP.EMTN.CHANF. 2506 3.42 € à\nPUITRINE FUMÈE U 10OTR 1606 k 2 10C€ M\n»» PAT INDUSTRIELLE\nBAGUETTE UIEN.FENDUE BOULAN. X4 1.49 € 11\n>» LIQUIDES\nCOTR COLA PÈT 50CL 190€ M\n»>»> CREMERIE L.S.\nEDAM PAST.TRANCH.U 24%HG Z008 !\n. 1/ € 4.74 € 11\n»>> VOL.LS INDUST .\nCUIS.PLT FERM.AUVERÈNE IGP UX2 4.02 € 11\n>>> EPICERIE\nRAKEN SOJA CARAMEL KOREAN 1706\n24 2,02 € 4,04 € 11\n»>» SURGELES\n0122h 4 FROMAGES U 3506\n21 0008 4.84 e 11\nTOTAL 11 Article(s) 5b,19 €\nCB SANS CONTRET UN e R OUR %6,15 €\nVoTAL TUA 41960 =sg._’86 .. , 26.15 €\n"
const text ="69006 FR\nTelephone : 0437242192\ni SIRET 51850260400029 - NAF 47110\n! TUA FR1351850604\nOpérateur bate Heure [PU licket\n101 Rf 2 15/03/21 16:38 3 373154\n» PAT INDQUSTRIELLE\nBAGUETTE UIEN.FENDUE BOULAN. X4 1,49 € 11\n»» LHARC.TRAIT.SAUC.SECS L\nSALAD.QUINOA BIV MARTINET 2006 3.35 € 11\nAPER.TON.BASIL.PIM.DANONE 1706 2,99 € 11\nRUTI PORC -25% SEL FH 2TR 1006 2,84 € 11\n»» BUP â\nTARTE HYRTILLES 500G TARTEFRAI 8,99 € 11 ‘\n»» CREMERIE L.S.\nCREME FR.EPAISSE 308HG U 50CL An e 1\n»» EPICERIE\nVITANIHES C1000 À CROQUER\ni 4,10 € ‘ 8.20 € 11\n333> UÜL c.. IND\"8T n .\nFLT PLT LABEL RGE DE L'AIN X2 (n . EM « 11\nEINFSFSSEe—\nTOTAL $ Article(s) … ……ÎË“;\nCB SANS CONTACT UX _ ur *\n1/ 5,50 ULl e 7 T0\nTOTAL TVA 34,27 € 1,69 € 36.16 €\n";
displayResult(document.querySelector("main"), text); */