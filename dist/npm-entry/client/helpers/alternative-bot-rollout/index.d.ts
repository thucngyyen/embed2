import type { StartOptions } from "@ada-support/embed-types";
import { Client } from "common/models/client";
export declare const PRIMARY_BOT_ASSIGNMENT_LABEL = "primary";
export declare const ALTERNATIVE_BOT_ASSIGNMENT_LABEL = "alternative";
export declare const BOT_ASSIGNMENT_STORAGE_KEY = "botAssignment";
export declare function getBotOverrideHandleFromWebpageURL(): string;
/**
 * Uses the alternative rollout value to determine whether a primary or alternative bot should be assigned to a chatter.
 *
 * If an override is provided in the URL, then it should be used but without impact to the bot assignment in storage.
 *
 * If a value of 0 is used for the alternative rollout value, then the primary bot should be used without impact to the bot assignment in storage.
 *
 * If a value of 1 is used for the alternative rollout value, then the alternative bot should be used without impact to the bot assignment in storage.
 *
 * @param primaryBotClientObject
 * @param alternativeBot
 * @param adaSettings
 */
export declare function fetchClientUsingAlternativeBotRollout(primaryBotClientObject: Client, alternativeBot: null | {
    handle: string;
    rollout: number;
}, adaSettings: StartOptions): Promise<Client | null>;
