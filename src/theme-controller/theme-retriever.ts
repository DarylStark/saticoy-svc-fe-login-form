import { ThemeMode } from './theme';

interface ThemeRetriever {
    retrieveMode(): ThemeMode | undefined;
    retrieveTheme(): string | undefined;
    isAutoMode(): boolean;
    isAutoTheme(): boolean;
}

class BrowserRetriever implements ThemeRetriever {
    retrieveMode(): ThemeMode | undefined {
        const mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeMode.Dark : ThemeMode.Light;
        return mode;
    }

    retrieveTheme(): string | undefined {
        return undefined;
    }

    isAutoMode(): boolean {
        return true;
    }

    isAutoTheme(): boolean {
        return true;
    }
}

class LocalPreferencesRetriever implements ThemeRetriever {
    constructor(private _key_theme: string, private _key_mode: string) { }

    retrieveMode(): ThemeMode | undefined {
        const mode = localStorage.getItem(this._key_mode);
        if (mode === 'light') return ThemeMode.Light;
        if (mode === 'dark') return ThemeMode.Dark;
        return undefined;
    }

    retrieveTheme(): string | undefined {
        return localStorage.getItem(this._key_theme) || undefined;
    }

    isAutoMode(): boolean {
        return false;
    }

    isAutoTheme(): boolean {
        return false;
    }
}

export default ThemeRetriever;
export { BrowserRetriever, LocalPreferencesRetriever };