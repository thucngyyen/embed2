import type { AdaEventDataKeyedByEvent, AdaEventKey, AdaEventSubscriptionCallback } from "@ada-support/embed-types";
export declare function unsubscribeEvent(id: number): void;
export declare function subscribeEvent<K extends AdaEventKey>(eventKey: K, callback: AdaEventSubscriptionCallback<K>): number;
export declare function publishEvent<K extends AdaEventKey>(eventKey: K, data: AdaEventDataKeyedByEvent[K]): void;
