"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var SterlingBank = /** @class */ (function () {
    function SterlingBank(key) {
        var _this = this;
        this.interbankNameEnquiry = function (body, header) {
            return (0, index_1.interbankNameEnquiry)(_this.secretKey, body, header);
        };
        this.secretKey = key;
    }
    return SterlingBank;
}());
module.exports = SterlingBank;
//
// class SterlingBank {
//
//     constructor(props, context) {
//         super(props, context);
//
//     }
//
//
// }
