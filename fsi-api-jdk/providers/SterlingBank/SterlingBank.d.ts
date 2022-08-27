interface bodyInterface {
}
export default class SterlingBank {
    secretKey: string;
    constructor(key: string);
    interbankNameEnquiry: (body: bodyInterface, header?: object) => Promise<object>;
}
export {};
