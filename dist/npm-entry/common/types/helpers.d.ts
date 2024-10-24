export declare type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
export declare type TriggerCondition = URLMatchTriggerCondition | DateTimeTriggerCondition;
export interface URLMatchTriggerCondition {
    type: "url-match";
    conditions_any: [
        {
            type: "ends-with" | "contains" | "equals" | "regex";
            value: string;
        }
    ];
}
export interface DateTimeTriggerCondition {
    type: "datetime";
    timezone: string;
    condition: {
        operator: "before-exclusive" | "after-inclusive";
        datetime: string;
    };
}
