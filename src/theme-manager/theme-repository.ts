import { Theme, Style } from './theme';

interface ThemeRepository<T extends Style = Style> {
    getTheme(theme_name: string): Theme<T>;
    getThemeNames(): string[];
}

class ManualThemeRepository<T extends Style = Style> implements ThemeRepository<T> {
    private _themes: { [key: string]: Theme<T> } = {};

    installTheme(theme: Theme<T>) {
        this._themes[theme.name] = theme;
    }

    installThemes(themes: Theme<T>[]) {
        themes.forEach(theme => this.installTheme(theme));
    }

    getTheme(theme_name: string): Theme<T> {
        if (!this._themes[theme_name])
            throw new Error(`Theme "${theme_name}" is not found.`);
        return this._themes[theme_name];
    }

    getThemeNames(): string[] {
        return Object.keys(this._themes);
    }
}

export { ManualThemeRepository };
export default ThemeRepository;