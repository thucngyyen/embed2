import type { BusinessEvent } from "businessEvents/types";
import type { LanguageKey } from "common/types/languages";
export interface ChatButton {
    size: number;
    background_color: string;
    icon_path: string;
    icon_type: "default" | "custom";
}
export interface CurrentIntro {
    response_id: string;
    body: string;
    style: string;
    duration: number | null;
    delay: number;
}
export interface Features {
    ui_customization?: boolean;
    afm_business_events?: boolean;
    afm_proactive_messaging?: boolean;
    chat_session_auth?: boolean;
}
export interface ClientObject {
    handle: string;
    rollout: number;
    alternative_bot: null | {
        handle: string;
        rollout: number;
    };
    chat: boolean;
    persistence: string;
    language: LanguageKey;
    privacy: boolean;
    tint: string;
    chat_button: ChatButton;
    intro?: CurrentIntro;
    features: Features;
    marketing_campaigns_order?: string[];
    translated_languages: string[];
    [key: string]: unknown;
}
export interface CachedClientObject {
    handle: string;
    rollout: number;
    alternative_bot: null | {
        handle: string;
        rollout: number;
    };
    chat: boolean;
    persistence: string;
    language: LanguageKey;
    privacy: boolean;
    tint: string;
    chat_button: ChatButton;
    features: Features;
    business_events?: BusinessEvent[];
    marketing_campaigns_order?: string[];
    [key: string]: unknown;
}
export interface ClientResponse {
    client: ClientObject;
}
export interface NotificationStatusResponse {
    is_live_state: boolean;
    unread_amount: number;
}
