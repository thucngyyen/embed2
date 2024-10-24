import type { StartOptions } from "@ada-support/embed-types";
import type { Manifest } from "./manifest";
export declare const getChatVersionFromManifest: (manifest: Manifest | unknown) => string;
export declare const getChatVersion: (adaSettings: StartOptions) => Promise<string>;
