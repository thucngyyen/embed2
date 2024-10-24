import type { URLMatchTriggerCondition } from "common/types/helpers";
export interface BusinessEvent {
    event_key: string;
    value: number;
    trigger_conditions: URLMatchTriggerCondition[];
}
export interface BusinessEventsResponse {
    business_events: BusinessEvent[];
}
