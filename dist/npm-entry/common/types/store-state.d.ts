import type { Modality, StartOptions } from "@ada-support/embed-types";
import type { ConnectionState } from "common/constants/events";
import type { Client } from "common/models/client";
import type { AdaCluster } from "common/types";
export interface StoreState extends StartOptionsNoFunction {
    chatterCreated: string | undefined;
    chatterToken: string | undefined;
    sessionToken: string | undefined;
    client?: Client;
    enabledLanguages: string[];
    isDrawerOpen: boolean;
    zdSessionId?: string | null;
    zdPreviousTags?: string | null;
    zdMessagingExternalUserId?: string | null;
    zdMessagingChatterCreated?: string | null;
    drawerHasBeenOpened: boolean;
    isIntroShown: boolean;
    isButtonShown: boolean;
    introDimensions: {
        height?: number;
        width?: number;
    };
    initialURL?: string;
    wasIntroShown: boolean;
    unreadMessageCount: number;
    embedStyles?: string;
    connections: {
        [key: string]: ConnectionState;
    };
    appConnectionState: ConnectionState;
    notificationsPermission?: NotificationPermission;
    browserHasNotificationSupport: boolean;
    chatDimensions?: {
        height?: number;
        width?: number;
    };
    isChatWebsocketConnected: boolean;
    latestCampaignKey?: string;
    hasChatOpenedAfterProactiveMessagesShown: boolean;
    chatterInLiveChat: boolean;
    language?: string;
    adaSettings: StartOptions;
    wasCampaignShownButNowClosed: boolean;
    proactiveCampaignHadMessages: boolean;
    deviceToken: string | null;
    activeModality?: Modality;
}
export interface StartOptionsNoFunction {
    handle: string;
    lazy?: boolean;
    styles?: string;
    embedStyles?: string;
    domain?: string;
    cluster?: AdaCluster;
    language?: string;
    greeting?: string;
    hideMask?: boolean;
    metaFields?: Record<string, unknown>;
    sensitiveMetaFields?: Record<string, unknown>;
    parentElement?: string | HTMLElement;
    privateMode?: boolean;
    rolloutOverride?: number;
    crossWindowPersistence?: boolean;
    testMode?: boolean;
    preload?: boolean;
}
