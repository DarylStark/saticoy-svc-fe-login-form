import { ThemeMode } from './theme';

interface ThemeSaver {
    saveMode(mode?: ThemeMode): void;
    saveTheme(theme?: string): void;
}

class LocalPreferencesSaver implements ThemeSaver {
    constructor(private _key_theme: string, private _key_mode: string) { }

    private _save(key: string, value?: string) {
        if (value === undefined)
            return localStorage.removeItem(key);
        localStorage.setItem(key, value);
    }

    saveMode(mode?: ThemeMode) {
        this._save(this._key_mode, mode);
    }

    saveTheme(theme?: string) {
        this._save(this._key_theme, theme);
    }
}

export default ThemeSaver;
export { LocalPreferencesSaver }