"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrl = void 0;
var constants = __importStar(require("../../config/Constants"));
var axios_1 = __importDefault(require("axios"));
var Methods;
(function (Methods) {
    Methods["GET"] = "GET";
    Methods["POST"] = "POST";
    Methods["PUT"] = "PUT";
    Methods["PATCH"] = "PATCH";
    Methods["DELETE"] = "DELETE";
})(Methods || (Methods = {}));
;
var getUrl = function (url) { return "".concat(constants.baseUrl).concat(url); };
exports.getUrl = getUrl;
// export const settings = {
//     // baseURL: `http://159.65.81.15/api`,
//     baseURL: `http://192.168.15.142/api`,
//     // baseURL: `http://95.179.206.26/api`,
//     //timeout: 1000,
//     headers: {
//         // 'X-Requested-With': 'XMLHttpRequest',
//         // 'accept-encoding': 'gzip, deflate, br',
//         // 'sec-fetch-mode': 'cors',
//         // 'sec-fetch-site': 'same-origin',
//         // Accept: 'application/json',
//         // 'Content-Type': 'application/json',
//         // 'Content-Type': 'application/json;charset=utf-8',
//         'Content-Type': 'application/json',
//         // 'Access-Control-Allow-Headers': '*',
//         // 'Access-Control-Allow-Origin': '*',
//         // 'Access-Control-Allow-Credentials': true,
//         // 'Access-Control-Expose-Headers': 'access_token',
//         //  // 'Access-Control-Request-Headers': 'authorization',
//         //  'Authorization': `Bearer ${getSession()}`,
//         //  'common': {
//         //      'access-token': `Bearer ${getSession()}`,
//         //      'Authorization': `Bearer ${getSession()}`,
//         //  }
//     },
// };
// const instance = axios.create();
// // export const bearer = `Bearer ${getSession()}`;
// // const token = store.getState().user.token;
// // const token = 'sssssss';
//
// // export const bearer = `Bearer ${token}`;
// // console.log('bearer****', bearer);
// // instance.defaults.headers.common['Authorization'] = bearer;
//
// const onResponseSuccess = (response: AxiosResponse) => {
//     return Promise.resolve(response);
// };
//
// const onResponseFail = (error: AxiosError) => {
//     // const status = error.status || error.response.status;
//     // if (status === 403 || status === 401) {
//     //     console.log(error)
//     //     // const checkInUse = _.isEmpty(getSessionWithKey('__checkInUse'))
//     //     //     ? false
//     //     //     : getSessionWithKey('__checkInUse');
//     //     // if (checkInUse === false) {
//     //     //     setSessionWithValue(true, '__checkInUse');
//     //     //     return redirectToLogin();
//     //     //     // return onUnauthenticated();
//     //     // }
//     // }
//     return Promise.reject(error);
// };
//
// instance.interceptors.response.use(onResponseSuccess, onResponseFail);
// export default {
//     async getRef(url: string, request: any) {
//         return await instance.get(url, request);
//     },
//     async get(url: string, request: any) {
//         return await instance.get(getUrl(url), request);
//     },
//     async postRef(url: string, request: any) {
//         return await instance.post(url, request);
//     },
//     async post(url: string, request: any) {
//         return await instance.post(getUrl(url), request);
//     },
//     async put(url, request) {
//         return await instance.put(getUrl(url), request);
//     },
//     async patch(url, request) {
//         return await instance.patch(getUrl(url), request);
//     },
//     async delete(url, request) {
//         return await instance.delete(getUrl(url), request);
//     },
// };
//
// const onResponseSuccess = (response: AxiosResponse) => {
//     return Promise.resolve(response);
// };
//
// const onResponseFail = (error: AxiosError) => {
//     //const status = error.status || error.response.status;
//     return Promise.reject(error);
// };
//
// instance.interceptors.response.use(onResponseSuccess, onResponseFail);
var apiCall = function (url, method, secretKey, body, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var fullUrl, isGetRequest, options, result, res, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                fullUrl = (0, exports.getUrl)(url);
                isGetRequest = method.toLowerCase() === 'get';
                options = {
                    url: fullUrl,
                    method: method,
                    params: isGetRequest ? body : null,
                    headers: __assign({ 'Content-Type': 'application/json;charset=UTF-8', 'Accept': 'application/json', 'Sandbox-key': secretKey }, headers),
                    data: isGetRequest ? null : body
                };
                result = {
                    codeError: false,
                    success: false,
                    status: 0,
                    message: "",
                    data: {}
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, axios_1.default)(options)];
            case 2:
                res = _a.sent();
                result.success = true;
                result.status = res.status;
                result.data = res.data;
                return [2 /*return*/, result];
            case 3:
                error_1 = _a.sent();
                if (error_1.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    result.status = error_1.response.status;
                    result.message = error_1.message;
                    result.data = error_1.response.data;
                }
                else if (error_1.request) {
                    result.data = error_1.request;
                }
                else {
                    // Something happened in setting up the request that triggered an Error
                    result.message = error_1.message;
                }
                return [2 /*return*/, result];
            case 4: return [2 /*return*/];
        }
    });
}); };
module.exports = apiCall;
