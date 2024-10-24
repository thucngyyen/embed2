import type { StartOptions } from "@ada-support/embed-types";
import { h } from "preact";
import type { MessageService } from "client/lib/message-service";
import type { StoreProxy } from "client/lib/store-proxy";
interface OwnProps {
    store: StoreProxy;
    messageService: MessageService;
    adaSettings: StartOptions;
    entryContainer: HTMLElement;
    initializationResolve?: () => void;
    initializationReject?: (error: Error) => void;
}
export declare const ConnectedContainer: (ownProps: OwnProps) => h.JSX.Element;
export {};
