import type { StoreState } from "common/types/store-state";
export declare const isRTLLanguage: (language: StoreState["language"] | undefined) => boolean;
export declare const isRTL: (client: StoreState["client"] | undefined, language: StoreState["language"] | undefined) => boolean;
