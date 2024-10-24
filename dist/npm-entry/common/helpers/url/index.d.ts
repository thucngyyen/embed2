import type { AdaCluster } from "common/types";
interface GetEmbedUrlParams {
    frameName: "button" | "x-storage" | "intro" | "drawer-mask";
    handle: string;
    cluster?: AdaCluster;
    domain?: string;
}
interface QueryParams {
    [key: string]: string | boolean | number | null | undefined;
}
export interface CSInterface {
    name: "api";
    handle: string;
    cluster?: AdaCluster;
    domain?: string;
    route?: string;
    qp?: QueryParams;
    isEmbedFramed?: boolean;
}
export declare function getClientCacheUrl(handle: string, cluster?: AdaCluster, domain?: string): string;
export declare function getEmbedURL({ frameName, handle, cluster, domain }: GetEmbedUrlParams): string;
/**
 * Generate the Chat / API URL
 */
export declare function getURL({ name, handle, cluster, domain, route, qp }: CSInterface): string;
export declare function getChatURL({ handle, version, cluster, domain, qp, }: {
    handle: string;
    version?: string;
    cluster?: AdaCluster;
    domain?: string;
    qp?: QueryParams;
}): string;
export declare function escapeUrlParam(param: string): string;
export {};
