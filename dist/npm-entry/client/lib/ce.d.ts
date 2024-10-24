import type { FetchEventStatusType } from "common/constants/events";
import type { EmbedEvent, PayloadByEvent } from "common/lib/channel";
import { Channel } from "common/lib/channel";
import type { AdaCustomEvent, Refhandler } from "common/types/events";
/**
 * Custom Event Channel
 */
export declare class CustomEventChannel extends Channel {
    protected trackedListeners: Set<Refhandler>;
    protected trackedTimeouts: Set<number>;
    protected eventType: string;
    isConnected: boolean;
    postMessage<T extends EmbedEvent>(eventName: T, data: PayloadByEvent[T], id?: string, status?: FetchEventStatusType): void;
    addEventListener(handler: (type: string, payload?: unknown, id?: string, status?: FetchEventStatusType) => void): Refhandler;
    constructObjectToSend<T extends EmbedEvent>(type: T, payload?: PayloadByEvent[T], id?: string, status?: FetchEventStatusType): AdaCustomEvent;
}
