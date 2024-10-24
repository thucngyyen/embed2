import type { TriggerCondition } from "common/types/helpers";
export declare type GoalEvent = unknown;
export declare type CampaignFrequency = "every-time" | "once-per-session" | "once-per-user";
export interface MarketingCampaign {
    _id: string;
    version: "2021-01-12";
    client_id: string;
    created: string;
    updated: string;
    updated_by: string;
    name: string;
    description: string;
    campaign_key: string;
    status: "draft" | "active" | "off";
    trigger_conditions?: TriggerCondition[];
    goals: GoalEvent[];
    message_frequency: CampaignFrequency;
    message_delay: number;
    message_duration: number;
    response_id: string;
    message_text?: {
        [language: string]: string;
    } | null;
    follow_up_response_id?: string | null;
}
export interface CampaignsResponse {
    campaigns: MarketingCampaign[];
}
