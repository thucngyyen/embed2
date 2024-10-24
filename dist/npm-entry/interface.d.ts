import type { AdaEmbedAPI } from "@ada-support/embed-types";
import { AdaEmbedError } from "common/helpers/errors";
export declare const EMBED_NOT_INITIALIZED_ERROR: AdaEmbedError;
/**
 * Returns the public Embed methods to be bound to the window object.
 */
export declare function createEmbedInterface(): AdaEmbedAPI;
