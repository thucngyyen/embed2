import type { ComponentType } from "preact";
import { Component, h } from "preact";
import type { MapDispatchToProps, MapStateToProps, StoreProxyInterface } from "common/types/store";
import type { StoreState } from "common/types/store-state";
declare type Props<O, MSP extends MapStateToProps, MDP extends MapDispatchToProps> = {
    store: StoreProxyInterface;
    WrappedComponent: ComponentType<O & ReturnType<MSP> & ReturnType<MDP>>;
    mapStateToProps?: MSP;
    mapDispatchToProps?: MDP;
} & O;
export declare class ConnectContainer<O, MSP extends MapStateToProps, MDP extends MapDispatchToProps> extends Component<Props<O, MSP, MDP>> {
    state: {
        initialized: boolean;
        propsFromState: ReturnType<MSP>;
        propsFromDispatch: ReturnType<MDP>;
    };
    componentDidMount(): void;
    mapStateAndDispatch(state: StoreState): object;
    render(): h.JSX.Element;
}
export {};
