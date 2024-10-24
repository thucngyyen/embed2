import type { CampaignParams, StartOptions } from "@ada-support/embed-types";
import type { MessageService } from "client/lib/message-service";
import type { MarketingCampaign } from "./types";
interface TriggerCampaignImplParams {
    adaSettings: StartOptions;
    chatterToken?: string;
    campaign: MarketingCampaign;
    ignoreStatus: boolean;
    ignoreFrequency: boolean;
    clearCampaignToTrigger: () => void;
    messageService: MessageService;
}
export declare function triggerCampaignImpl({ adaSettings, chatterToken, campaign, ignoreStatus, ignoreFrequency, clearCampaignToTrigger, messageService, }: TriggerCampaignImplParams): void;
export declare const getCampaignToTrigger: (adaSettings: StartOptions, marketingCampaigns: MarketingCampaign[] | undefined, options: CampaignParams, onlyBasic: boolean) => MarketingCampaign | undefined;
export {};
