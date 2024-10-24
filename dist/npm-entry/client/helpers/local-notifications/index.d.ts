export declare const browserHasNotificationSupport: boolean;
export declare function checkIfUserHasGivenPermission(): boolean;
export declare function requestNotificationPermission(): Promise<NotificationPermission> | null;
export declare function createNotification(title: string, isChatOpen: boolean, onClickHandler?: (...args: unknown[]) => unknown, options?: {
    body?: string;
    icon?: string;
}): Notification | null;
/**
 * Used to listen for changes in Notification permission state
 */
export declare function notificationPermissionsListener(notificationPermissionsChangeHandler: (notificationStatus: NotificationPermission) => void): void;
