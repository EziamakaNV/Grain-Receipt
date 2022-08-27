declare enum Methods {
    'GET' = "GET",
    'POST' = "POST",
    'PUT' = "PUT",
    'PATCH' = "PATCH",
    'DELETE' = "DELETE"
}
export declare const getUrl: (url: string) => string;
interface Response {
    codeError?: boolean;
    success?: boolean;
    data?: object;
    status?: number;
    message?: string;
}
declare const apiCall: (url: string, method: Methods | string, secretKey: string, body: object | null, headers?: object | null) => Promise<Response>;
export default apiCall;
