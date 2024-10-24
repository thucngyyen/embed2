/// <reference types="lodash" />
export declare const DEFAULT_LOG_SAMPLE_RATE = 0.01;
export declare const shouldLog: ((sampleRate?: number) => boolean) & import("lodash").MemoizedFunction;
/**
 * Sends log to Datadog
 */
export declare function log(message: string, extra?: Record<string, unknown>, options?: {
    sampleRate?: number;
}): Promise<void>;
