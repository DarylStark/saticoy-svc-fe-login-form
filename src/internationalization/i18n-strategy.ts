interface I18nStrategy {
    getLocaleKey(): string | undefined;
    saveLocaleKey(key?: string): void;
    clear(): void;
}

class BrowserStrategy implements I18nStrategy {
    getLocaleKey(): string | undefined {
        // Get key from browser
        // TODO: Implement
        return 'nl';
    }

    saveLocaleKey(key?: string): void {
        // Nothing to do here
    }

    clear(): void {
        // Nothing to do here
    }
}

class PageArgsStrategy implements I18nStrategy {
    getLocaleKey(): string | undefined {
        // Get key from args
        // TODO: Implement
        return 'de';
    }

    saveLocaleKey(key?: string): void {
        // Nothing to do here
    }

    clear(): void {
        // Nothing to do here
    }
}


class LocalPreferencesStrategy implements I18nStrategy {
    getLocaleKey(): string | undefined {
        // Get key from saved settings
        return localStorage.getItem('locale') || undefined;
    }

    saveLocaleKey(key?: string): void {
        if (key)
            localStorage.setItem('locale', key);
    }

    clear(): void {
        localStorage.removeItem('locale');
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

    saveLocaleKey(key?: string): void {
        // Nothing to do here
    }

    clear(): void {
        // Nothing to do here
    }
}

export default I18nStrategy;
export { BrowserStrategy, LocalPreferencesStrategy, PageArgsStrategy, ChainedLocaleKeyStrategy };