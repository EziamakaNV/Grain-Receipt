"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Methods = exports.version = exports.baseUrl = void 0;
var baseUrl = 'https://fsi.ng/api/';
exports.baseUrl = baseUrl;
var version = 'v1';
exports.version = version;
var Methods;
(function (Methods) {
    Methods["GET"] = "GET";
    Methods["POST"] = "POST";
    Methods["PUT"] = "PUT";
    Methods["PATCH"] = "PATCH";
    Methods["DELETE"] = "DELETE";
})(Methods || (Methods = {}));
exports.Methods = Methods;
;
