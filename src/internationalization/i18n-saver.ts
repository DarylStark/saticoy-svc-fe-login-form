interface I18nSaver {
    saveLocale(locale?: string): void;
}

class LocalPreferencesSaver implements I18nSaver {
    constructor(private _locale_theme: string) { }

    saveLocale(locale?: string) {
        if (locale === undefined)
            return localStorage.removeItem(this._locale_theme);
        localStorage.setItem(this._locale_theme, locale);
    }
}

export default I18nSaver;
export { LocalPreferencesSaver }