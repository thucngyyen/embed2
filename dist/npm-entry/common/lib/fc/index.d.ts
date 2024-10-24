import type { FetchEventStatusType } from "common/constants/events";
import type { EmbedEvent, PayloadByEvent } from "common/lib/channel";
import { Channel } from "common/lib/channel";
import type { Refhandler } from "common/types/events";
/**
 * Frame Channel: Used for postMessage communication between iFrames.
 * NOTE: iFrames must have the same domain - when postMessages are sent between
 * iframes they use the eventListener below to check if the target domain matches
 * the domain from where the postMessage originated from.
 */
export declare class FrameChannel extends Channel {
    protected trackedListeners: Set<Refhandler>;
    protected trackedTimeouts: Set<number>;
    protected eventType: string;
    name: string;
    targetWindow: Window;
    targetOrigin: string;
    isConnected: boolean;
    constructor(name: string, targetWindow: Window, targetOrigin?: string);
    private static isMessageEvent;
    postMessage<T extends EmbedEvent>(eventName: T, data?: PayloadByEvent[T], id?: string, status?: FetchEventStatusType): void;
    isValidMessageEvent(event: MessageEvent | object): boolean;
    addEventListener(handler: (type: string, payload?: object, id?: string, status?: FetchEventStatusType) => void): Refhandler;
    constructObjectToSend(eventName?: string, payload?: unknown, id?: string, status?: FetchEventStatusType): string;
}
