export declare const CHAT_MANIFEST_PATH = "https://static.ada.support/chat-manifest.json";
export interface Manifest {
    versions: {
        hash: string;
        weight: number;
    }[];
}
export declare const loadChatManifest: () => Promise<Manifest | undefined>;
export declare const MANIFEST_VALIDATION_ERROR_MESSAGE = "The format of manifest file is incorrect";
export declare const isManifest: (input: unknown) => input is Manifest;
