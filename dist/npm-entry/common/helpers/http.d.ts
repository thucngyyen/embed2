interface InterfaceRequestObject {
    url: string;
    body?: string;
    method?: string;
    headers?: {
        [key: string]: string;
    };
}
/**
 * Vanilla HTTP request. Returns a Promise.
 */
export declare function httpRequest<T = object>(obj: InterfaceRequestObject): Promise<T>;
export {};
