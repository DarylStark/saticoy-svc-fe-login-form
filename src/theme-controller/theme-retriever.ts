import { ThemeMode } from './theme';

interface ThemeRetriever {
    retrieveMode(): ThemeMode | undefined;
    retrieveTheme(): string | undefined;
}

class BrowserRetriever implements ThemeRetriever {
    retrieveMode(): ThemeMode | undefined {
        const mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? ThemeMode.Dark : ThemeMode.Light;
        return mode;
    }

    retrieveTheme(): string | undefined {
        return undefined;
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
}

export default ThemeRetriever;
export { BrowserRetriever, LocalPreferencesRetriever };