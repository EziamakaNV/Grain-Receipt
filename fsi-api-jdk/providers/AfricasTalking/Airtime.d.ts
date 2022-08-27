import { ApiCallMethodInterface } from "../../helpers/GeneralHelpers";
declare const sendAirtime: ApiCallMethodInterface;
declare const transactionStatus: (secretKey: string, body: object | null, header?: object | null) => void;
export { sendAirtime, transactionStatus };
