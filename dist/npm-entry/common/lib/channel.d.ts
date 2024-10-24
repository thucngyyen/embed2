import type { CampaignParams, ResetParams } from "@ada-support/embed-types";
import type { FetchEventStatusType } from "common/constants/events";
import type { SendGreetingParams, StoreDispatchPayload, StoreGetPayload, TrackEventParams } from "common/types";
import type { AdaCustomEvent, Refhandler } from "common/types/events";
import type { MetaFieldPayload } from "common/types/store";
import type { StoreState } from "common/types/store-state";
export interface EmbedRequestPayloadByEvent {
    CREATE_PROACTIVE: {
        body: string;
        duration: number | null;
        responseId?: string | null;
    };
    DELETE_HISTORY: undefined;
    DISPATCH: StoreDispatchPayload;
    EVAL_CAMPAIGN_CONDITIONS: CampaignParams;
    GET: StoreGetPayload;
    GET_INFO: unknown;
    GET_STATE: unknown;
    RESET: ResetParams;
    SET_META_FIELDS: MetaFieldPayload;
    SET_SENSITIVE_META_FIELDS: MetaFieldPayload;
    STOP: unknown;
    TRIGGER_CAMPAIGN: unknown;
    TRACK_EVENT: TrackEventParams;
    SEND_GREETING: SendGreetingParams;
    CLOSE_CAMPAIGN: unknown;
    SET_DEVICE_TOKEN: {
        token: string;
    };
    TRIGGER_ANSWER: {
        answerId: string;
    };
    SET_LANGUAGE: {
        language: string;
    };
}
export declare type EmbedRequestEvent = keyof EmbedRequestPayloadByEvent;
export interface EmbedResponsePayloadByEvent {
    "ALL_FRAMES_LOADED": unknown;
    "BROWSER_HAS_NOTIFICATIONS_RESPONSE": unknown;
    "CREATE_PROACTIVE_RESPONSE": string | null;
    "DELETE_HISTORY": unknown;
    "DELETE_HISTORY_RESPONSE": unknown;
    "DISPATCH_RESPONSE": StoreState;
    "EVAL_CAMPAIGN_CONDITIONS_RESPONSE": unknown;
    "GET_RESPONSE": StoreState[keyof StoreState];
    "GET_INFO_RESPONSE": unknown;
    "GET_STATE_RESPONSE": StoreState;
    "GREETING": unknown;
    "JWT_AUTH_RESPONSE": unknown;
    "RESET_RESPONSE": unknown;
    "SET_META_FIELDS_RESPONSE": unknown;
    "SET_SENSITIVE_META_FIELDS_RESPONSE": unknown;
    "SET_WINDOW_ORIGIN": Location;
    "STATE_CHANGE": StoreState;
    "STOP_RESPONSE": unknown;
    "TRACK_EVENT_RESPONSE": string | null;
    "TRIGGER_CAMPAIGN_RESPONSE": string | null;
    "CLOSE_CAMPAIGN_RESPONSE": unknown;
    "entry_INIT": unknown;
    "client_INIT": unknown;
    "button_INIT": unknown;
    "intro_INIT": unknown;
    "drawer-mask_INIT": unknown;
    "chat_INIT": unknown;
    "x-storage_INIT": unknown;
    "SET_DEVICE_TOKEN_RESPONSE": unknown;
}
export declare type EmbedResponseEvent = keyof EmbedResponsePayloadByEvent;
export declare type EmbedEvent = EmbedRequestEvent | EmbedResponseEvent;
export declare type PayloadByEvent = EmbedRequestPayloadByEvent & EmbedResponsePayloadByEvent;
export declare abstract class Channel {
    protected abstract trackedListeners: Set<Refhandler>;
    protected abstract trackedTimeouts: Set<number>;
    protected abstract eventType: string;
    abstract isConnected: boolean;
    abstract postMessage<T extends EmbedEvent>(eventName: T, data?: PayloadByEvent[T], id?: string): void;
    abstract addEventListener(handler: (type: string, payload?: unknown, id?: string) => void): Refhandler;
    abstract constructObjectToSend(type: string, payload?: Record<string, unknown>, id?: string, status?: FetchEventStatusType): AdaCustomEvent | string;
    removeEventListener<T extends EmbedEvent>(ref: Refhandler<T>): void;
    clearTrackedTimeout(ref: number): void;
    clearTimeoutsAndListeners(): void;
    fetch<T extends EmbedRequestEvent, R extends EmbedResponseEvent>(requestEvent: T, responseEvent: R, payload?: PayloadByEvent[T], timeoutOverride?: number): Promise<PayloadByEvent[R] | unknown | undefined>;
    protected addTrackedListener<T extends string>(ref: Refhandler<T>): void;
    protected addTrackedTimeout(ref: number): void;
    protected removeAllEventListeners(): void;
    protected clearAllTrackedTimeouts(): void;
}
