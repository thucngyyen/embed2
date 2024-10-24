import type { StartOptions } from "@ada-support/embed-types";
import type { TrackEventParams } from "common/types";
import type { BusinessEvent } from "./types";
export declare function trackEventImpl(adaSettings: StartOptions, chatterToken: string | undefined, sessionToken: string | undefined, params: TrackEventParams): void;
export declare const getEventsToTrigger: (businessEvents: BusinessEvent[]) => BusinessEvent[];
