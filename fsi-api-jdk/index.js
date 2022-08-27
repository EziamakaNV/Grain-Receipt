"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GeneralHelpers_1 = require("./helpers/GeneralHelpers");
var Fsi = function (secretKey, provider) {
    return (0, GeneralHelpers_1.resolveProviderName)(provider, secretKey);
};
module.exports = Fsi;
// import {init, AfricanTalking} from 'FsiEngine'
// import {sendSms} from 'FsiEngine/AfricanTalking'
// // import * as FsiEngine from 'FsiEngine'
//
//
// init('key', 'type');
// AfricanTalking.sendSms()
//
// const sssss = init('key', 'type','AfricanTalking');
// const sssss = init('key', 'type','AfricanTalking');
// sssss.sendSms()
