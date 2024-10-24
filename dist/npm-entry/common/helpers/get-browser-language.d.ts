import type { LanguageKey } from "common/types/languages";
/**
 * Gets a language code from the browser. Stolen from `chat` repo
 *
 * NOTE: THIS SHOULD NOT EXIST. IF YOU FIND YOURSELF IN A POSITION WHERE YOU NEED TO SUPPORT THIS
 * CODE, PLEASE DO EVERYTHING IN YOUR POWER TO AVOID IT. THIS CODE SHOULD DIE. EMBED SHOULD NOT BE
 * IN CHARGE OF PICKING LANGUAGES AND ANY CODE MAKING USE OF THIS FUNCTION SHOULD BE KEPT TO AN
 * ABSOLUTE MINIMUM.
 *
 * THIS WAS A NECESSARY HACK BECAUSE INTROS WERE IMPLEMENTED IN EMBED, BEFORE TRANSLATIONS
 * WERE A THING, AND GOT LEFT BEHIND DURING THE IMPLEMENTATION THEREOF.
 *
 * I'M SO SORRY.
 */
export declare function isSupportedLanguageCode(languageCode: string): boolean;
declare const getBrowserLanguage: () => LanguageKey;
export default getBrowserLanguage;
