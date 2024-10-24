import type { ComponentType } from "preact";
import { h } from "preact";
import type { ActionCreators } from "common/constants/actions";
import type { Dispatch, MapDispatchToProps, MapStateToProps } from "common/types/store";
export declare function connect<MSP extends MapStateToProps, MDP extends MapDispatchToProps>(mapStateToProps?: MSP, mapDispatchToProps?: MDP): <O>(WrappedComponent: ComponentType<O & ReturnType<MSP> & ReturnType<MDP>>) => (ownProps: O) => h.JSX.Element;
export declare function bindActionCreators(action: Partial<ActionCreators>, dispatch: Dispatch): (payload?: object) => Promise<import("../../common/types/store-state").StoreState>;
