/**
 * Creates a standardized Error type for Ada Embed.
 */
export declare class AdaEmbedError extends Error {
    constructor(message: string);
}
/**
 * This is needed to ensure we standardize warnings we expose to the client.
 */
export declare function warn(warningText: string): void;
