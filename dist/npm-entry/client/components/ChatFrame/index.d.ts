import type { StartOptions } from "@ada-support/embed-types";
import { Component, h } from "preact";
import type { MessageService } from "client/lib/message-service";
import type { StoreProxy } from "client/lib/store-proxy";
import type { FrameChannel } from "common/lib/fc";
import type { CreateNotificationPayload, MessagePayload } from "common/types/events";
import type { StoreState } from "common/types/store-state";
interface PropsFromState {
    handle: StoreState["handle"];
    domain: StoreState["domain"];
    cluster: StoreState["cluster"];
    isDrawerOpen: boolean;
    greeting: StoreState["greeting"];
    language: StoreState["language"];
    wasIntroShown: boolean;
    parentElement: StoreState["parentElement"];
    privateMode: StoreState["privateMode"];
    testMode: StoreState["testMode"];
    client: StoreState["client"];
    chatDimensions: StoreState["chatDimensions"];
    drawerHasBeenOpened: StoreState["drawerHasBeenOpened"];
}
interface OwnProps {
    adaSettings: StartOptions;
    store: StoreProxy;
    messageService: MessageService;
    setChatHasBeenRendered: () => void;
    resetChat: () => void;
    skipGreeting: boolean;
    chatVersion?: string;
}
interface PropsFromDispatch {
    setConnectionState: (payload: MessagePayload) => Promise<StoreState>;
    setGlobalState: (payload: Partial<StoreState>) => Promise<StoreState>;
    toggleChat: () => Promise<StoreState>;
}
declare type ChatFrameProps = PropsFromState & OwnProps & PropsFromDispatch;
interface ChatFrameState {
    isMounted: boolean;
    closeTransitionTime: number;
}
export declare class ChatFrame extends Component<ChatFrameProps, ChatFrameState> {
    iframeRef: import("preact").RefObject<any>;
    pageScrollLocked: boolean;
    documentBodyOverflow: string;
    channel?: FrameChannel;
    chatRenderTimeout?: number;
    url: string;
    state: ChatFrameState;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ChatFrameProps): void;
    componentWillUnmount(): void;
    get darkMode(): boolean;
    getIframeSrc(): string;
    get styles(): string;
    get hasVisibleProactiveMessages(): boolean;
    get visibleProactiveStyles(): string;
    static get parentElementStyles(): string;
    get chooseStyles(): string;
    handleScrollLock(): void;
    collapseIframe(): void;
    /**
     * Initial body "overflow" style may be set to something other than "auto"
     * We should remember it, to put back the initial value when we unlock the scrolling
     */
    rememberInitialPageStyle(): void;
    /**
     * Lock the document body from scrolling. If we don't do this,
     * there are SERIOUS issues on iOS.
     */
    lockDocumentBodyFromScrolling(): void;
    /**
     * Set back initial values from client document body
     */
    unlockDocumentBodyFromScrolling(): void;
    notificationOnClickHandler(isChatOpen: boolean): void;
    handleNotifications(payload: CreateNotificationPayload): void;
    handleChatEvent(type: string, payload: unknown, id?: string): Promise<void>;
    bindChatEventHandlers(): void;
    frameLoaded(): void;
    render(): h.JSX.Element;
}
declare const _default: (ownProps: OwnProps) => h.JSX.Element;
export default _default;
