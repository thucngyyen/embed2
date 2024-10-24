/**
 * Older browsers like IE11 cannot use Event and CustomEvent constructors. These
 * functions use the "old-school" approach if Event and CustomEvent are not
 * available on the window object.
 */
export declare function createNewCustomEvent(eventName: string, payload: object, bubbles?: boolean, cancelable?: boolean): CustomEvent;
export declare function createNewEvent(eventName: string, bubbles?: boolean, cancelable?: boolean): Event;
