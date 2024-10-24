import type { MessageService } from "client/lib/message-service";
import { Store } from "client/store";
import type { Channels } from "common/types/channels";
import type { StoreProxyInterface } from "common/types/store";
import type { StoreState } from "common/types/store-state";
import type { CustomEventChannel } from "./ce";
export declare class StoreProxy implements StoreProxyInterface {
    localChannel: CustomEventChannel;
    store: Store;
    registeredCallbacks: ((payload: StoreState) => void)[];
    constructor(initialState: StoreState, messageService: MessageService);
    get: <K extends keyof StoreState>(key: K) => Promise<StoreState[K]>;
    getState: () => Promise<StoreState>;
    dispatch: (actionKey: string, payload?: {}) => Promise<StoreState>;
    subscribe: (callback: (payload: StoreState) => unknown) => void;
    addChannelListener: (name: keyof Channels) => void;
}
