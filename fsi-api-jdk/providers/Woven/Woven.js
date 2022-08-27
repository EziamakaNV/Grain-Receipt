"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var wovenFinanceApis = __importStar(require("./VirtualAccount"));
var wovenTransactions = __importStar(require("./Transactions"));
var wovenSettlements = __importStar(require("./Settlements"));
var Woven = /** @class */ (function () {
    function Woven(key) {
        var _this = this;
        // Virtual accounts
        this.createVNubanAndCustomer = function (body, header) { return wovenFinanceApis.createVNubanAndCustomer(_this.secretKey, body, header); };
        this.createVNubanForExisitingCustomer = function (body, header) { return wovenFinanceApis.createVNubanForCustomer(_this.secretKey, body, header); };
        this.editVAccount = function (body, header) { return wovenFinanceApis.editVAccount(_this.secretKey, body, header); };
        this.listVirtualAccounts = function (body, header) { return wovenFinanceApis.fetchVirtualAccounts(_this.secretKey, body, header); };
        this.lookUpVAccount = function (body, header, routeParam) { return wovenFinanceApis.lookUpVAccount(_this.secretKey, body, header, routeParam); };
        this.getVNubanTransactions = function (body, header) { return wovenFinanceApis.getVNubanTransactions(_this.secretKey, body, header); };
        // Transactions
        this.listTransactions = function (body, header) { return wovenTransactions.listTransactions(_this.secretKey, body, header); };
        this.fetchTransaction = function (body, header) { return wovenTransactions.fetchTransactions(_this.secretKey, body, header); };
        // Settlements
        this.getAllSettlements = function (body, header) { return wovenSettlements.getAllSettlements(_this.secretKey, body, header); };
        this.getSettlementBreakdown = function (body, header, routeParam) { return wovenSettlements.getSettlementBreakdown(_this.secretKey, body, header, routeParam); };
        this.secretKey = key;
    }
    return Woven;
}());
module.exports = Woven;
