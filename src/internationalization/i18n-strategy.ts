interface I18nStrategy {
    getLocaleKey(): string | undefined;
    saveLocaleKey(key?: string): void;
    clear(): void;
}

class BrowserStrategy implements I18nStrategy {
    constructor(private _allowed_keys: string[]) {
    }

    getLocaleKey(): string | undefined {
        // Get key from browser
        if (navigator.languages) {
            for (const language of navigator.languages) {
                if (this._allowed_keys.includes(language))
                    return language;
            }
        }
    }

    saveLocaleKey(key?: string): void {
        // Nothing to do here
    }

    clear(): void {
        // Nothing to do here
    }
}

class PageArgsStrategy implements I18nStrategy {
    constructor(private _argument: string = 'lang') {
    }

    getLocaleKey(): string | undefined {
        // Get key from args
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(this._argument) || undefined;
    }

    saveLocaleKey(key?: string): void {
        // Nothing to do here
    }

    clear(): void {
        // Nothing to do here
    }
}


class LocalPreferencesStrategy implements I18nStrategy {
    constructor(private _key: string = 'locale_key') {
    }

    getLocaleKey(): string | undefined {
        // Get key from saved settings
        return localStorage.getItem(this._key) || undefined;
    }

    saveLocaleKey(key?: string): void {
        if (key)
            localStorage.setItem(this._key, key);
    }

    clear(): void {
        localStorage.removeItem(this._key);
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