interface I18nStrategy {
    getLocaleKey(): string | undefined;
}

class BrowserStrategy implements I18nStrategy {
    getLocaleKey(): string | undefined {
        // Get key from browser
        // TODO: Implement
        return 'nl';
    }
}

class PageArgsStrategy implements I18nStrategy {
    getLocaleKey(): string | undefined {
        // Get key from args
        // TODO: Implement
        return 'de';
    }
}


class LocalPreferencesStrategy implements I18nStrategy {
    getLocaleKey(): string | undefined {
        // Get key from saved settings
        // TODO: Implement
        return 'en';
    }
}

class ChainedLocaleKeyStrategy implements I18nStrategy {
    constructor(private _strategies: I18nStrategy[]) { }

    addStrategy(strategy: I18nStrategy) {
        this._strategies.push(strategy);
    }

    getLocaleKey(): string | undefined {
        for (const strategy of this._strategies) {
            const key = strategy.getLocaleKey();
            if (key)
                return key;
        }
        return undefined;
    }
}

export default I18nStrategy;
export { BrowserStrategy, LocalPreferencesStrategy, PageArgsStrategy, ChainedLocaleKeyStrategy };