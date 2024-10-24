/**
 * We need to redefine history "pushState" and "replaceState". By default, these
 * will not trigger an event listener when called.
 */
export declare function bindLocationChangeOverrides(): void;
export declare function unbindLocationChangeOverrides(): void;
