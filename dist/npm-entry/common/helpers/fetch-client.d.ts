import type { AdaCluster } from "common/types";
import type { ClientObject, ClientResponse } from "common/types/http";
export declare function isClientObject(client: Record<string, unknown>): client is ClientObject;
/**
 * Tries fetching the client from cache. If this fails, tries fetching it from API.
 * If this also fails, returns null.
 */
export declare function fetchClient(handle: string, cluster?: AdaCluster, domain?: string, language?: string): Promise<ClientResponse | null>;
