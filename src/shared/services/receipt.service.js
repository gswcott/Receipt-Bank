import { Receipt } from "../models/receipt.model";

const receipt = new Receipt();
let dictReceipts = {}; 
if(typeof(Storage)!="undefined"){
    if(localStorage.receiptBank01){
        dictReceipts=JSON.parse(localStorage.receiptBank01); 
    }
}
export class ReceiptService {
    constructor() {
    }
    static getValue(key) {
        return receipt[key];
    }
    static setValue(key, value) {
        receipt[key] = value;
    }
    static storeReceipt(fileName){ 
        dictReceipts[fileName] = receipt; 
        localStorage.receiptBank01=JSON.stringify(dictReceipts); 
    }
    // Date
    static isKeyDate(line) {
        if (line.match(/Date/i)) {
            return true;
        }
        return false;
    }
    static isValueDate(line) {
        if (line.match(/\d{2}(\/|.)*\d{2}(\/|.)*\d{2,}/g)) {
            return true;
        }
        return false;
    }
    static setValueDate(line) {
        if (this.isKeyDate(line) && this.isValueDate(line)) {
            const res = line.match(/\d{2}(\/|.)*\d{2}(\/|.)*\d{2,}/g);
            if(res){
                this.setValue("date", res[0]);
            }
        }
    }
    //Siren
    static isKeySiren(line) {
        if (line.match(/SIREN|SIRET/i)) {
            return true;
        }
        return false;
    }
    static setSirenNumber(line) {
        if (this.isKeySiren(line)) {
            const res = line.match(/(\s\d{9}|(\s\d+\s*\d+\s*\d+))/g);
            if(res){
                this.setValue("siren", res[0]);
            }
        }
    }

    // total tva ttc
    static extractPrice(line) {
        const res = line.match(/\d+(,|\.)*\d+\s*€*/g); 
        if(res){
            return res[0];
        }
        return; 
    }

    static isPct(line){
        if(line.match(/\d+(,|.)*\d*\s*%/g)){
            return true;
        }
        return false; 
    }
    static isPrice(line) {
        if(line.match(/\d+(,|.)*\d+\s*€*/g)){
            return true;
        }
        return false; 
    }

    static isKeyExclTax(line) {
        if (line.match(/TOTA.\s*(net)*\s*H[^H]*T[^T]*/i)) {
            return true;
        }
        return false;
    }
    static setValueExclTax(line) {
        if (this.isKeyExclTax(line)) {
            this.setValue("exclTax", this.extractPrice(line));
        }
    }
    static isKeyInclTax(line) {
        if (!this.isKeyExclTax(line) && line.match(/TOTA.\s*(TTC)*/i)) {
            return true;
        }
        return false;
    }
    static setValueInclTax(line) {
        if (this.isKeyInclTax(line)) {
            this.setValue("inclTax", this.extractPrice(line));
        }
    }

    static isKeyVat(line) {
        if (line.match(/(TOTA.)*\s*TVA\s*[^A-Z]*\s*\d+(,|.)*\d+\s*€*/i)) {
            return true;
        }
        return false;
    }
    static setValueVatRate(line) {
        if (this.isKeyVat(line)) {
            const res = line.match(/\d+(,|.)*\d*\s*%/g); 
            if(res){
                this.setValue("vatRate", res[0]);
            }
        }
    }
    static setValueVat(line) {
        if (this.isKeyVat(line)) {
            if(this.isPct(line)){
                const tmp = line.split(/\d+(,|.)*\d*\s*%/g); 
                this.setValue("vat", this.extractPrice(tmp[tmp.length-1]));
            }else{
                this.setValue("vat", this.extractPrice(line));
            }
        }
    }

    static extractValueAddressStreet(line){
        return line.match(/\d*\D*\s*(rue|avenue|allée|boulevard|chuassée|chemin|cité)\D+/i); 
    }
    static extractValueAddressPC(line){
        return line.match(/\d{5}\s*\D+/i); 
    }
    static extractValueAddressCountry(line) {
       return line.match(/(France|Fr)/i); 
    }
    static isKeyAddress() {
        if (line.match(/address/i)) {
            return true;
        }
        return false;
    }
    static setValueAddress(arrayLines){
        let address = ""; 
        let i = 0; 
        while(i<arrayLines.length){
            const res = this.extractValueAddressStreet(arrayLines[i]); 
            if(res){
                address = address + res[0]; 
                break;
            }
            i++;
        }
        if(i<=arrayLines.length-2){
            const resCp = this.extractValueAddressPC(arrayLines[i+1]); 
            if(resCp){
                address = address + ", " +resCp[0]; 
            }
        }
        if(i<=arrayLines.length-3){
            const resCountry = this.extractValueAddressCountry(arrayLines[i+2]); 
            if(resCountry){
                address = address + ", " +resCountry[0]; 
            }
        }
        this.setValue("address", address);
    }

    static scanLines(text) {
        //console.log(JSON.stringify(text));
        const arrayLines = text.split(/\n+/); 
        //console.log(arrayLines);
        if(!arrayLines[arrayLines.length-1]){
            arrayLines.pop(); 
        }
        //console.log(arrayLines);
        this.setValueAddress(arrayLines);
        arrayLines.forEach((line) => {
            this.setSirenNumber(line);
            this.setValueDate(line);
            this.setValueExclTax(line);
            this.setValueVat(line);
            this.setValueVatRate(line);
            this.setValueInclTax(line);
        })
    }

}
