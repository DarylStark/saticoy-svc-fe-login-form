interface I18nStrategy {
    getLanguage(): string | undefined;
}

class BrowserStrategy implements I18nStrategy {
    getLanguage(): string | undefined {
        // Get language from browser
        // TODO: Implement
        return 'nl';
    }
}

class PageArgsStrategy implements I18nStrategy {
    getLanguage(): string | undefined {
        // Get language from args
        // TODO: Implement
        return 'de';
    }
}


class LocalPreferencesStrategy implements I18nStrategy {
    getLanguage(): string | undefined {
        // Get language from saved settings
        // TODO: Implement
        return 'en';
    }
}

class ChainedLanguageSelector implements I18nStrategy {
    private _languageSelectors: I18nStrategy[];

    constructor(languageSelectors: I18nStrategy[]) {
        this._languageSelectors = languageSelectors;
    }

    addLanguageSelector(languageSelector: I18nStrategy) {
        this._languageSelectors.push(languageSelector);
    }

    getLanguage(): string | undefined {
        for (const languageSelector of this._languageSelectors) {
            const language = languageSelector.getLanguage();
            if (language)
                return language;
        }
        return undefined;
    }
}

export default I18nStrategy;
export { BrowserStrategy as BrowserLanguageSelector, LocalPreferencesStrategy as SavedLanguageSelector, PageArgsStrategy as ArgsLanguageSelector, ChainedLanguageSelector };