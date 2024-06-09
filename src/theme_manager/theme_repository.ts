/* Module with a ThemeManager class.

The ThemeManager class manages themes. Themes can be defined in objects of
type Theme. A Theme object can have a light and dark style, or just one of
them. A style is an object with two keys, 'page' and 'antd'. The 'page' key
contains CSS properties for the page, and the 'antd' key contains the theme
for the Ant Design library.

Clients can subscribe to the ThemeManager to receive notifications when the
style is changed. The ThemeManager can have multiple subscribers. You can
use a setter function from the `useState` hook to update the style of a
component when the style changes.

If a theme has both light and dark styles, the ThemeManager will switch between
them when the toggle_style method is called. The ThemeManager will notify all
subscribers when the style is changed. */

import { Theme } from './theme';

interface ThemeRepository {
    install_theme(theme: Theme): void;
}

class ManualThemeRepository implements ThemeRepository {
    private _themes: { [key: string]: Theme } = {};

    install_theme(theme: Theme) {
        this._themes[theme.name] = theme;
    }

    install_themes(themes: Theme[]) {
        themes.forEach(theme => this.install_theme(theme));
    }

    get_theme(theme_name: string): Theme {
        return this._themes[theme_name];
    }
}

export { ManualThemeRepository };
export default ThemeRepository;