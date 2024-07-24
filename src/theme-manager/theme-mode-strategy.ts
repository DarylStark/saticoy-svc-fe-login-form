
import { ThemeMode } from './theme-manager';

interface ThemeModeStrategy {
    getMode(): ThemeMode | undefined;
    saveMode(mode?: ThemeMode): void;
    clear(): void;
}

class LocalPreferencesStrategy {
    constructor(private _key: string = 'theme_mode') {
    }

    getMode(): ThemeMode | undefined {
        return localStorage.getItem(this._key) || undefined;
    }

    saveMode(mode?: ThemeMode): void {
        if (mode)
            localStorage.setItem(this._key, mode);
    }

    clear(): void {
        localStorage.removeItem(this._key);
    }
}

class BrowserStrategy {
    constructor(private _key: string = 'theme_mode') {
    }

    getMode(): ThemeMode | undefined {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    saveMode(mode?: ThemeMode): void {
        // Nothing to do here
    }

    clear(): void {
        // Nothing to do here
    }
}

export default ThemeModeStrategy;
export { BrowserStrategy, LocalPreferencesStrategy }