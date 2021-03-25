import template from "./result.component.html";
import Tesseract from 'tesseract.js';
import { PictureService } from "../shared/services/picture.service";
import { ReceiptService } from "../shared/services/receipt.service";
import { ListReceiptComponent } from "../list-receipt/list-receipt.component";
import { CameraComponent } from "../camera/camera.component"; 
import { NavBarComponent } from "../shared/navbar/navbar.component";
export class ResultComponent {
    constructor(){
        //PictureService.setSrc("./images/factureExample1.png"); 
        this.src = PictureService.getSrc();
        this.text = null; 
        //this.text="\\dentification du vendeur\nNom : independant\nAdresse : 321 rue du modèle\nNuméro de SIREN : 123 456 789\nNuméro de téléphone : 04 72 20 20 20\nEnregistré au RCS/RM de Paris\nclient\nNom : ETS CLIENT ABC\nlAdresse : 32 rue du Client Fidèle\nForme juridique : SAS\nNuméro de TVA : FR12314428789\nFacture N°00001\nDate : 23/02/2024\nP e E mN TT ETE\nConseil en stratégie 400 200,00€ 800,00€\nOptimisation des comptes Facebook Ads 2,00 300,00€ 600,00€\nCréation d'annonces 400 100,00€ 400,00€\nRUU T MIS 1800,00€\nMontant de TVA 20%\nRe/ (4 2160,00€\n";
        //this.text = "Mon Entreprise\n22, Avenue Voltaire\n13000 Marseille. France\nTéléphone : +33 4 92 99 99 99\nDestinataire\nDate de la facture 1382020 Acheteur SA\nRéférence de la facture 123 Michel Acheteur\nNuméro de client 456 31 rue de la Forét\nâ 13100 Aix-en-Provence\nPaiement dû 1392020 Prance\nModalité de paiement 30 jours\nEmis par Pierre Foumisseur\nContact cient Michael Acheteur\nDate de la vente/prestation 13.10.2020\nInformations aditionnelles\nMerci d'avoir choisi Mon Entreprise pour nos services.\nService après-vente - Garantie : 1 an\nDescription Quantité — Unité PrixunitaireHT — %TVA — TotalTVA — Total TTC\nMain-d'œuvre 5 h 60,00€ 20% — 6000€ 36000 €\nProduit 10 pes 105,00 € 20% — 10500€ — 126000€\nTotalHT — 1350,00€\nTotalTVA — 27000€\nTotalTTC — 1620,00€\nSiège socia Goordonnées Détaits bancaires\n22,Avenue Votaie Pierre Fourisseur Banque … NPParbes\n13000 Mareie Phone:+43 30 12345678 Code banque 10000000\nFrance Emai:Pire@macompagne r N de compte 12345078\n° Siren où Siret ccn v macompagne f vn FR@s41124058254\nN° TVAinir ; FROX 689009060 SWFTIBIC | FRHHCXX1001\n";
        //this.text="Joanna Binet æ\n48 Coubertin\n31400 Paris\nFACTURÉ À ENVOYÉ À FACTURE N° FR-001\nCendrilon Ayot Cendrilon Ayot DATE 21012019\n69 rue Nations 46 Rue St Ferréol °\n22000 Paris 92360 Île-de-France COMMANDE N 16502018\nÉCHÉANCE 24/06/2019\nQTÉ DÉSIGNATION PRIX UNIT. HT MONTANT HT\n4 Grand brun escargot pour manger 100.00 100.00\n2 Petit marinière uniforme en bleu 15.00 30.00\n3 Facie à jouer accordéon 5.00 1500\nTotal HT 145.00\nTVA200% 29.00\nTOTAL 174.00€\n‘ Ë â. t\nCONDITIONS ET MODALITÉS DE PAIEMENT\nLe paiement est dû dans 15 jours\n« | Caisse d'Epargne\nIBAN: FR12 1234 5678\nSWIFT/BIC: ABCDFRPIXXX\n";
        //this.text="Le nom de votre société FACTURE\n\nAdresse\n\ncP Vile\n\nTéléphone / Fax\n\nRéférences Internet\n\nSociété etiou Nom du client\n\nRéférence Adresor\n\nDate CPVile\n\nN'clent\n\nInütuié: Description du projt etlou Produitfacturé\n\nauanié Désignation | PricuniaireHT | PrixtoulHT\n\n12 _m2 detomette - Rf Toscane blanc*(20\"20) 2 we\n\nTota Hors Tase 27600€\nTVAà 20% 5520€\nTotalTTCen euros 381,20€\n\nEnvotre amabl rêglement,\n\nCordilemen,\n\nCondtons d paement : paemt à réeponde facue, à 30 jpurs\n\nFoumidert e paemant ct passl 'rért d rtard Le mortant des pénaltés résute del'aplicaïon\n\nux sommas rotart dues d us diméréléai  viquèr u momers d fc\n\nIndemmé fotataie pau ai derecouvrement ue a réanir e cas e rr depaement0€\n";
        //this.text = "69006 FR\nTelephone : 0437242192\ni SIRET 51850260400029 - NAF 47110\n! TUA FR1351850604\nOpérateur bate Heure [PU licket\n101 Rf 2 15/03/21 16:38 3 373154\n» PAT INDQUSTRIELLE\nBAGUETTE UIEN.FENDUE BOULAN. X4 1,49 € 11\n»» LHARC.TRAIT.SAUC.SECS L\nSALAD.QUINOA BIV MARTINET 2006 3.35 € 11\nAPER.TON.BASIL.PIM.DANONE 1706 2,99 € 11\nRUTI PORC -25% SEL FH 2TR 1006 2,84 € 11\n»» BUP â\nTARTE HYRTILLES 500G TARTEFRAI 8,99 € 11 ‘\n»» CREMERIE L.S.\nCREME FR.EPAISSE 308HG U 50CL An e 1\n»» EPICERIE\nVITANIHES C1000 À CROQUER\ni 4,10 € ‘ 8.20 € 11\n333> UÜL c.. IND\"8T n .\nFLT PLT LABEL RGE DE L'AIN X2 (n . EM « 11\nEINFSFSSEe—\nTOTAL $ Article(s) … ……ÎË“;\nCB SANS CONTACT UX _ ur *\n1/ 5,50 ULl e 7 T0\nTOTAL TVA 34,27 € 1,69 € 36.16 €\n"; 
    }
    display(selector){
        document.querySelector(selector).innerHTML = template; 
        this.displayNavBar();
        const img = document.querySelector(".img-facture"); 
        img.src = this.src; 
        const editBtns = document.querySelectorAll(".edit"); 
        const valueDivs = document.querySelectorAll(".value"); 
        editBtns.forEach((btn) =>{
            btn.onclick = (e) =>{
                e.preventDefault();
                this.editText(btn, valueDivs); 
            }
        });
        document.querySelector(".trash").onclick = (e) =>{
            this.displayCamera(); 
            e.preventDefault();
        }
        document.querySelector(".valid").onclick = (e) =>{
            this.validate();
            e.preventDefault();
        } 
        ReceiptService.setValue("imgSrc", this.src);
        this.extractText(); 
        // ReceiptService.scanLines(this.text); 
        // this.affectValues();
    }

    editText(btn, textDivs){
        const dataname = btn.getAttribute("data-name");
        const resDivs = Object.values(textDivs).filter(item => item.getAttribute("data-name") === dataname);
        const resDiv = resDivs[0];
        resDiv.classList.add("editable");
        resDiv.setAttribute("contenteditable", "true");
        //resDiv.focus();
        this.placeCaretAtEnd(resDiv);
        resDiv.addEventListener("blur", ()=>{
            resDiv.classList.remove("editable"); 
            resDiv.setAttribute("contenteditable", "false");
            ReceiptService.setValue(dataname, resDiv.innerText);
        })
    }
    //https://stackoverflow.com/questions/4233265/contenteditable-set-caret-at-the-end-of-the-text-cross-browser
    placeCaretAtEnd(element) {
        element.focus();
        if (typeof window.getSelection != "undefined"
                && typeof document.createRange != "undefined") {
            const range = document.createRange();
            range.selectNodeContents(element);
            range.collapse(false);
            const sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            const textRange = document.body.createTextRange();
            textRange.moveToElementText(element);
            textRange.collapse(false);
            textRange.select();
        }
    }
    validate(){
        const date=new Date(); 
        const fileName=date.getFullYear().toString() + "-" + (date.getMonth()+1).toString() + "-" 
        + date.getDate().toString() + "-" + date.getHours().toString()+  "-" 
        + date.getMinutes().toString() + "-" + date.getSeconds().toString();
        ReceiptService.storeReceipt(fileName); 
        this.displayListReceipt(fileName); 
    }
    displayListReceipt(fileName){
        const listReceipt = new ListReceiptComponent(); 
        listReceipt.display("main"); 
    }
    displayCamera(){
        const camera = new CameraComponent(); 
        camera.display("main");
    }
    extractText(){
        Tesseract.recognize(
            this.src,
            'fra',
            { logger: m => {
                    //console.log(m);
                } 
            })
            .then(({ data: { text } }) => {
                    ReceiptService.scanLines(text); 
                    this.affectValues();
            })
    }
    affectValues(){
        document.querySelector(".loader").innerHTML = ""; 
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
