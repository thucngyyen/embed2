import type { MessageService } from "client/lib/message-service";
import type { Channels } from "common/types/channels";
import type { StoreState } from "common/types/store-state";
export declare class Store {
    state: StoreState;
    defaultState: StoreState;
    messageService: MessageService;
    constructor(initialState: StoreState, messageService: MessageService);
    addChannelListener(name: keyof Channels): void;
    private handleEvents;
    private getEventHandler;
    private getStateEventHandler;
    private dispatchEventHandler;
    private commitStateChanges;
}
