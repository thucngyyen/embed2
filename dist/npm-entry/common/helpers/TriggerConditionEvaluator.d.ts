import type { DateTimeTriggerCondition, TriggerCondition, URLMatchTriggerCondition } from "common/types/helpers";
export declare const evalUrlMatchTriggerCondition: (triggerCondition: URLMatchTriggerCondition, url: string) => boolean;
export declare const evalDatetimeTriggerCondition: (triggerCondition: DateTimeTriggerCondition, currentDateTime: Date) => boolean;
export declare const evalTriggerCondition: (triggerCondition: TriggerCondition) => boolean;
