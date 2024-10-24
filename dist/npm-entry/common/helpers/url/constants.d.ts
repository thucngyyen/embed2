export interface Hosts {
    [key: string]: Ports;
}
export interface Ports {
    [key: string]: number;
}
export declare const ports: {
    readonly localhost: {
        readonly api: 8000;
        readonly chat: 8002;
        readonly default: 9001;
    };
    readonly e2ereference: {
        readonly api: 8000;
        readonly chat: 8002;
        readonly default: 9001;
    };
};
