import type { AdaEmbedAPI } from "@ada-support/embed-types";
import type { ActionTypes } from "common/constants/actions";
import type { StoreState } from "./store-state";
export * from "./interface";
export interface StoreAction {
    [key: string]: string | object | number;
    type: ActionTypes;
}
export interface StoreMutations {
    (state: StoreState, action: StoreAction): StoreState;
}
export interface StoreDispatchPayload {
    actionKey: string;
    payload: unknown;
}
export interface StoreGetPayload {
    key: string;
}
export interface TrackEventParams {
    eventKey: string;
    value?: number;
    meta?: {};
}
export declare type SendGreetingParams = {
    responseId?: string;
} | undefined;
export interface TriggerCampaignParams {
    campaignKey: string;
    ignoreStatus?: boolean;
    ignoreFrequency?: boolean;
}
export interface CustomWindow extends Window {
    adaEmbed: AdaEmbedAPI;
    navigator: Navigator;
    adaEmbedLoadedCallback?: () => void;
}
