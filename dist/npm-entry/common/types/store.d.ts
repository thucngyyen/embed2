import type { StoreState } from "./store-state";
export declare type Get = <K extends keyof StoreState>(key: K) => Promise<StoreState[K]>;
export declare type GetState = () => Promise<StoreState>;
/**
 * DirectDispatch does the same thing as Dispatch, except
 */
export declare type DirectDispatch = (actionKey: string, payload?: {}) => void;
export declare type Dispatch = (actionKey: string, payload?: {}) => Promise<StoreState>;
export declare type Subscribe = (callback: (payload: StoreState) => void) => void;
export declare type MapStateToProps<R = object> = (storeState: StoreState) => R;
export declare type MapDispatchToProps<R = object> = (dispatch: Dispatch) => R;
export interface StoreProxyInterface {
    get: Get;
    getState: GetState;
    dispatch: Dispatch;
    subscribe: Subscribe;
}
export declare type MetaFieldValue = string | number | boolean | null;
export declare type MetaFieldPayload = Record<string, MetaFieldValue>;
