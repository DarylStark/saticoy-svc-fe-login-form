interface LanguageSelector {
    getLanguage(): string | undefined;
}

class BrowserLanguageSelector implements LanguageSelector {
    getLanguage(): string | undefined {
        // Get language from browser
        // TODO: Implement
        return 'nl';
    }
}

class ArgsLanguageSelector implements LanguageSelector {
    getLanguage(): string | undefined {
        // Get language from args
        // TODO: Implement
        return 'de';
    }
}


class SavedLanguageSelector implements LanguageSelector {
    getLanguage(): string | undefined {
        // Get language from saved settings
        // TODO: Implement
        return 'en';
    }
}

class ChainedLanguageSelector implements LanguageSelector {
    private _languageSelectors: LanguageSelector[];

    constructor(languageSelectors: LanguageSelector[]) {
        this._languageSelectors = languageSelectors;
    }

    addLanguageSelector(languageSelector: LanguageSelector) {
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

export default LanguageSelector;
export { BrowserLanguageSelector, SavedLanguageSelector, ArgsLanguageSelector, ChainedLanguageSelector };