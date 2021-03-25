export class Receipt {

    constructor(){

        /**
         * company name
         * @type {String}
         */
        this.companyName = null; 

        /**
         * company siren
         * @type {String}
         */
        this.siren = null; 

        /**
         * company address
         * @type {String}
         */
        this.address = null; 

        /**
         * Date
         * @type {Date}
         */
        this.date = null; 

        /**
         * Client name
         * @type {String}
         */
        this.client = null; 

        /**
         * Excluding tax
         * @type {Number}
         */
        this.exclTax = null;  

        /**
         * VAT rate
         * @type {Number}
         */
        this.vatRate = null;

        /**
         * VAT
         * @type {Number}
         */
        this.vat = null; 

        /**
         * Including Tax
         * @type {Number}
         */
        this.inclTax = null;

        /**
         * Receipt image src
         * @type {String}
         */
        this.imgSrc = null; 
    }
}