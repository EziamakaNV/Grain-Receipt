export default class Woven {
    secretKey: string;
    constructor(key: string);
    createVNubanAndCustomer: (body: object, header?: object) => Promise<object>;
    createVNubanForExisitingCustomer: (body: object, header?: object) => Promise<object>;
    editVAccount: (body: object, header?: object) => Promise<object>;
    listVirtualAccounts: (body: object, header?: object) => Promise<object>;
    lookUpVAccount: (body: object, header?: object, routeParam?: string) => Promise<object>;
    getVNubanTransactions: (body: object, header?: object) => Promise<object>;
    listTransactions: (body: object, header?: object) => Promise<object>;
    fetchTransaction: (body: object, header?: object) => Promise<object>;
    getAllSettlements: (body: object, header?: object) => Promise<object>;
    getSettlementBreakdown: (body: object, header?: object, routeParam?: string) => Promise<object>;
}
