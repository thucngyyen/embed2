import { h } from "preact";
import type { MessageService } from "client/lib/message-service";
import type { StoreProxy } from "client/lib/store-proxy";
interface OwnProps {
    name: "button" | "x-storage" | "intro" | "drawer-mask";
    roleDescription?: string;
    styles: string;
    store: StoreProxy;
    messageService: MessageService;
    onTransitionEnd?: h.JSX.TransitionEventHandler<HTMLIFrameElement>;
    title?: string;
}
declare const _default: (ownProps: OwnProps) => h.JSX.Element;
export default _default;
