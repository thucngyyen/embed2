import type { AdaEventDataKeyedByEvent, AdaEventKey } from "@ada-support/embed-types";
import type { FetchEventStatusType } from "common/constants/events";
import type { EmbedEvent, EmbedRequestEvent, PayloadByEvent } from "common/lib/channel";
export interface MessagePayload {
    [key: string]: any;
}
export interface CreateNotificationPayload {
    title: string;
    body?: string;
    icon?: string;
}
export interface CustomJavascriptEventPayload {
    event_data: {
        event_name: string;
    };
}
export interface PublishEventPayload<K extends AdaEventKey> {
    eventKey: K;
    data: AdaEventDataKeyedByEvent[K];
}
export interface AdaCustomEvent<E extends EmbedEvent | string = string> {
    type: E;
    payload?: E extends keyof PayloadByEvent ? PayloadByEvent[E] : unknown;
    id?: string;
    status?: FetchEventStatusType;
}
export declare type Refhandler<E extends EmbedRequestEvent | string = string> = (handleEvent: MessageEvent | CustomEventInit<AdaCustomEvent<E>>) => void;
