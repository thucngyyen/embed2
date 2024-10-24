import type { ActionCreators } from "common/constants/actions";
import type { StoreAction } from "common/types";
import type { MessagePayload } from "common/types/events";
import type { DirectDispatch } from "common/types/store";
import type { StoreState } from "common/types/store-state";
export declare const actions: {
    [key in ActionCreators]: ({ currentState, payload, dispatch, }: {
        payload?: MessagePayload;
        currentState: StoreState;
        dispatch: DirectDispatch;
    }) => StoreAction;
};
