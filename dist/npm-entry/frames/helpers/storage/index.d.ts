import type { AdaStorageKey, AdaStorageValueByKey } from "@ada-support/web-storage";
import type { Client } from "common/models/client";
export declare const PERSISTENCE_NORMAL = "normal";
export declare const PERSISTENCE_SESSION = "session";
/**
 * Retrieves items from local or session storage, depending on the client's
 * persistence setting. If privateMode is set, it returns null.
 */
export declare function retrieveStorage<T extends AdaStorageKey>(key: T, client: Client, privateMode?: boolean): AdaStorageValueByKey[T] | null;
export declare function setBrowserStorageItem<T extends AdaStorageKey>(key: T, value: AdaStorageValueByKey[T], persistenceSetting: Client["persistence"]): void;
