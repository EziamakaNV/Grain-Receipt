"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTransactions = void 0;
var rest_1 = __importDefault(require("../../helpers/rest"));
var providerPrefix = 'woven/';
var listTransactions = function (secretKey, body, header) {
    var url = providerPrefix + 'vnubans/create_customer';
    return (0, rest_1.default)(url, 'POST', secretKey, body, header);
};
exports.listTransactions = listTransactions;
