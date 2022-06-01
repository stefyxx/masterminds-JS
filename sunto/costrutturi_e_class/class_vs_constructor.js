//3 modi per scrivere la stessa cosa:                                       !!!! 3 IDENTICS WAYS  !!!!!
    // 1) class: constructor(...params) + methods after constructor()
export class Pole {
    /**
     * @param {string} poleName
     * @param {string} addressNl
     * @param {string} addressFr
     * @param {string} addressEn
     * @param {Date} startDate
     * @param {Date} endDate
     * @param {Number} count
     * @param {Number} AVG_speed
     */
    constructor(poleName, addressNl, addressFr, addressEn, startDate, endDate, count, AVG_speed) {
        this.poleID = "device.".concat(poleName);   //PAY ATTENTION: TO CONTROL IN DB IF THE 'id' IS AUTO-INCREASED  !!!
        this.poleName = poleName;
        this.addresses = Object.assign({}, {
            nl: addressNl,
            fr: addressFr,
            en: addressEn,
        });
        this.startDate = startDate;
        this.endDate = endDate;
        this.count = count;
        this.AVG_speed = AVG_speed;
    }
    /**
     * @param {Number} conto
     */
    updateCountPole(conto) {
        this.count = conto;
    }

}
//.........................................................................................
    /* 2) function: basic constructor(...params){
            this.property = param;

                //methods:
            this.nameFunction(){};   
        }
    */

/**
 * Constructor for a bike-pole (= device + live + history)
 * @param {String} poleName
 * @param {string} addressNl
 * @param {String} addressFr
 * @param {String} addressEn
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {Number} count
 * @param {Number} AVG_speed
 */
export function Pole(poleName, addressNl, addressFr, addressEn, startDate, endDate, count, AVG_speed) {

    this.poleID = "device.".concat(poleName),   //PAY ATTENTION: TO CONTROL IN DB IF THE 'id' IS AUTO-INCREASED  !!!
        this.poleName = poleName,
        this.addresses = Object.assign({}, {
            nl: addressNl,
            fr: addressFr,
            en: addressEn
        }),
        this.startDate = startDate,
        this.endDate = endDate,
        this.count = count,
        this.AVG_speed = AVG_speed,
        this.updateCountPole = function (/** @type {Number} */ conto) {
            this.count = conto;
        }

};
//.........................................................................................
    /* 3) function with EXPLICIT return: basic constructor(...params){
        return{     
            NOT this.   !!!!
        }

    */

/**
 * Constructor for a bike-pole (= device + live + history)
 * @param {String} poleName
 * @param {string} addressNl
 * @param {String} addressFr
 * @param {String} addressEn
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {Number} count
 * @param {Number} AVG_speed
 */
 function Pole(poleName, addressNl, addressFr, addressEn, startDate, endDate, count, AVG_speed) {
    return {
        poleID: "device.".concat(poleName),   //PAY ATTENTION: TO CONTROL IN DB IF THE 'id' IS AUTO-INCREASED  !!!
        poleName: poleName,
        addresses: {
            nl: addressNl,
            fr: addressFr,
            en: addressEn
        },
        startDate: startDate,
        endDate: endDate,
        count: count,
        AVG_speed: AVG_speed,
        updateCountPole: function (/** @type {Number} */ conto) {
            this.count = conto;
        }
    }
};