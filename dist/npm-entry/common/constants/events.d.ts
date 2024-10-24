/**
 * Embed Method Events
 */
export declare const DELETE_HISTORY_EVENT = "DELETE_HISTORY";
/**
 * Chat Events
 */
export declare const GET_WINDOW_ORIGIN = "GET_WINDOW_ORIGIN";
export declare const CHAT_STARTED = "CHAT_STARTED";
export declare const CHAT_WEBSOCKET_CONNECTED = "CHAT_WEBSOCKET_CONNECTED";
export declare const ANALYTICS_EVENT = "ANALYTICS";
export declare const CHATTER_EVENT = "CHATTER";
export declare const CHATTER_LIVECHAT_EVENT = "LIVE_CHAT_UPDATE";
export declare const CUSTOM_JAVASCRIPT_EVENT = "CUSTOM_JAVASCRIPT";
export declare const RESET_FROM_CHAT_EVENT = "RESET_FROM_CHAT";
export declare const ZD_JWT_AUTH_EVENT = "JWT_AUTH";
export declare const ZD_JWT_AUTH_RESPONSE_EVENT = "JWT_AUTH_RESPONSE";
export declare const CREATE_NOTIFICATION_EVENT = "CREATE_NOTIFICATION";
export declare const BROWSER_HAS_NOTIFICATIONS_EVENT = "BROWSER_HAS_NOTIFICATIONS";
export declare const BROWSER_HAS_NOTIFICATIONS_RESPONSE_EVENT = "BROWSER_HAS_NOTIFICATIONS_RESPONSE";
export declare const REQUEST_NOTIFICATIONS_EVENT = "REQUEST_NOTIFICATIONS";
export declare const END_CONVERSATION_EVENT = "END_CONVERSATION";
export declare const PUBLISH_EVENT = "PUBLISH_EVENT";
export declare const ZD_MESSAGING_HANDOFF = "ZD_MESSAGING_HANDOFF";
/**
 * Store Events
 */
export declare const DISPATCH_EVENT = "DISPATCH";
export declare const DISPATCH_RESPONSE_EVENT = "DISPATCH_RESPONSE";
export declare const STATE_CHANGE_EVENT = "STATE_CHANGE";
export declare const GET_EVENT = "GET";
export declare const GET_RESPONSE_EVENT = "GET_RESPONSE";
export declare const GET_STATE_EVENT = "GET_STATE";
export declare const GET_STATE_RESPONSE_EVENT = "GET_STATE_RESPONSE";
/**
 * Event Timeouts
 */
export declare const DEFAULT_CONNECTION_TIMEOUT = 60000;
/**
 * Internal Events
 */
export declare const ALL_FRAMES_LOADED = "ALL_FRAMES_LOADED";
/**
 * Indicates state of FC (Frame Connection)
 */
export declare enum ConnectionState {
    Done = "DONE",
    Loading = "LOADING",
    Failure = "FAILURE",
    Uninitiated = "UNINITIATED"
}
/**
 * Embed Custom Events
 */
export declare const GET_INFO = "GET_INFO";
export declare const GET_INFO_RESPONSE = "GET_INFO_RESPONSE";
export declare const SET_META_FIELDS = "SET_META_FIELDS";
export declare const SET_META_FIELDS_RESPONSE = "SET_META_FIELDS_RESPONSE";
export declare const STOP = "STOP";
export declare const STOP_RESPONSE = "STOP_RESPONSE";
export declare const DELETE_HISTORY = "DELETE_HISTORY";
export declare const DELETE_HISTORY_RESPONSE = "DELETE_HISTORY_RESPONSE";
export declare const RESET = "RESET";
export declare const RESET_RESPONSE = "RESET_RESPONSE";
export declare const CREATE_PROACTIVE = "CREATE_PROACTIVE";
export declare const CREATE_PROACTIVE_RESPONSE = "CREATE_PROACTIVE_RESPONSE";
export declare const TRACK_EVENT = "TRACK_EVENT";
export declare const TRACK_EVENT_RESPONSE = "TRACK_EVENT_RESPONSE";
export declare const TRIGGER_CAMPAIGN = "TRIGGER_CAMPAIGN";
export declare const TRIGGER_CAMPAIGN_RESPONSE = "TRIGGER_CAMPAIGN_RESPONSE";
export declare const EVAL_CAMPAIGN_CONDITIONS = "EVAL_CAMPAIGN_CONDITIONS";
export declare const EVAL_CAMPAIGN_CONDITIONS_RESPONSE = "EVAL_CAMPAIGN_CONDITIONS_RESPONSE";
export declare const CLOSE_CAMPAIGN = "CLOSE_CAMPAIGN";
export declare const CLOSE_CAMPAIGN_RESPONSE = "CLOSE_CAMPAIGN_RESPONSE";
export declare const SET_DEVICE_TOKEN = "SET_DEVICE_TOKEN";
export declare const SET_DEVICE_TOKEN_RESPONSE = "SET_DEVICE_TOKEN_RESPONSE";
export declare const SEND_GREETING = "SEND_GREETING";
/**
 * Fetch Event Status
 */
export declare enum FetchEventStatus {
    Success = "SUCCESS",
    Failure = "FAILURE"
}
export declare type FetchEventStatusType = FetchEventStatus.Success | FetchEventStatus.Failure;
