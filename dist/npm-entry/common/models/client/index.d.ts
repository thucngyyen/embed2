import type { BusinessEvent } from "businessEvents/types";
import type { ChatButton, ClientResponse, CurrentIntro, Features } from "common/types/http";
import type { LanguageKey, LanguageMap } from "common/types/languages";
import type { MarketingCampaign } from "src/campaigns/types";
export declare class Client {
    tint: string;
    chat: boolean;
    intro?: CurrentIntro;
    handle: string;
    rollout: number;
    alternative_bot: null | {
        handle: string;
        rollout: number;
    };
    language: LanguageKey;
    privacy: boolean;
    features: Features;
    persistence: string;
    chat_button: ChatButton;
    business_events?: BusinessEvent[];
    marketing_campaigns_order?: string[];
    marketing_campaigns?: MarketingCampaign[];
    ui_settings?: {
        chat?: {
            theme: "dark" | "light" | "auto";
            style: "round" | "rectangular";
        };
        embed?: {
            style: "round" | "text";
            button_text: LanguageMap;
        };
    };
    translated_languages: string[];
    [key: string]: unknown;
    constructor(clientResponse: ClientResponse["client"]);
}
export declare function getButtonText(client?: Client): string;
