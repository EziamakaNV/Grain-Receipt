"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSettlementBreakdown = exports.getAllSettlements = void 0;
var rest_1 = __importDefault(require("../../helpers/rest"));
var providerPrefix = 'woven/';
var getAllSettlements = function (secretKey, body, header) {
    var url = providerPrefix + 'settlements';
    return (0, rest_1.default)(url, 'GET', secretKey, body, header);
};
exports.getAllSettlements = getAllSettlements;
var getSettlementBreakdown = function (secretKey, body, header, routeParam) {
    var url = providerPrefix + "settlements/".concat(routeParam, "/transactions");
    return (0, rest_1.default)(url, 'GET', secretKey, body, header);
};
exports.getSettlementBreakdown = getSettlementBreakdown;
