"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMessage = exports.fetchPremiumSubscriptions = exports.deletePremiumSubscription = exports.createPremiumSubscription = exports.generateToken = exports.sendSms = void 0;
var rest_1 = __importDefault(require("../../helpers/rest"));
var providerPrefix = 'v1/africastalking';
var sendSms = function (secretKey, body) {
    var url = providerPrefix + '/version1/messaging';
    return (0, rest_1.default)(url, 'POST', secretKey, body);
};
exports.sendSms = sendSms;
var generateToken = function (secretKey, body) {
    var url = providerPrefix + '/checkout/token/create';
    return (0, rest_1.default)(url, 'POST', secretKey, body);
};
exports.generateToken = generateToken;
var createPremiumSubscription = function (secretKey, body) {
    var url = providerPrefix + '/version1/subscription/create';
    return (0, rest_1.default)(url, 'POST', secretKey, body);
};
exports.createPremiumSubscription = createPremiumSubscription;
var fetchPremiumSubscriptions = function (secretKey, body) {
    var url = providerPrefix + '/version1/subscription';
    return (0, rest_1.default)(url, 'GET', secretKey, body);
};
exports.fetchPremiumSubscriptions = fetchPremiumSubscriptions;
var deletePremiumSubscription = function (secretKey, body) {
    var url = providerPrefix + '/version1/subscription/delete';
    return (0, rest_1.default)(url, 'POST', secretKey, body);
};
exports.deletePremiumSubscription = deletePremiumSubscription;
var fetchMessage = function (secretKey, body) {
    var url = providerPrefix + '/version1/messaging';
    return (0, rest_1.default)(url, 'GET', secretKey, body);
};
exports.fetchMessage = fetchMessage;
