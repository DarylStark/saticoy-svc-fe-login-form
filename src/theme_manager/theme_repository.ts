import { Theme, Style } from './theme';

interface ThemeRepository<T extends Style> {
    install_theme(theme: Theme<T>): void;
}

class ManualThemeRepository<T extends Style> implements ThemeRepository<T> {
    private _themes: { [key: string]: Theme<T> } = {};

    install_theme(theme: Theme<T>) {
        this._themes[theme.name] = theme;
    }

    install_themes(themes: Theme<T>[]) {
        themes.forEach(theme => this.install_theme(theme));
    }

    get_theme(theme_name: string): Theme<T> {
        return this._themes[theme_name];
    }
}

export { ManualThemeRepository };
export default ThemeRepository;