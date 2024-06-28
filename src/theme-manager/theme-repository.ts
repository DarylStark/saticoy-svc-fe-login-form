import { Theme, Style } from './theme';

interface ThemeRepository<T extends Style = Style> {
    get_theme(theme_name: string): Theme<T>;
    get_theme_names(): string[];
}

class ManualThemeRepository<T extends Style = Style> implements ThemeRepository<T> {
    private _themes: { [key: string]: Theme<T> } = {};

    install_theme(theme: Theme<T>) {
        this._themes[theme.name] = theme;
    }

    install_themes(themes: Theme<T>[]) {
        themes.forEach(theme => this.install_theme(theme));
    }

    get_theme(theme_name: string): Theme<T> {
        if (!this._themes[theme_name])
            throw new Error(`Theme "${theme_name}" is not found.`);
        return this._themes[theme_name];
    }

    get_theme_names(): string[] {
        return Object.keys(this._themes);
    }
}

export { ManualThemeRepository };
export default ThemeRepository;