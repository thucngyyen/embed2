declare const errorTracker: {
    setTag(tag: string, value: string): void;
    trackException(error: Error): Promise<void>;
};
export default errorTracker;
