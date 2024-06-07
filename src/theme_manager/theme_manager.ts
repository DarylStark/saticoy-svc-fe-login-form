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

export type Style = {
    page: { [key: string]: string },
    antd: { [key: string]: any }
}

export type Theme = {
    name: string,
    author: string,
    light: Style,
    dark: Style
} | {
    name: string,
    author: string,
    dark: Style
} | {
    name: string,
    author: string,
    light: Style
};

type ThemeMode = 'light' | 'dark';

export type ThemeSelectHandler = (selected_style: Style) => void;
type Subscriptions = ThemeSelectHandler[];

class ThemeManager {
    private _themes: { [key: string]: Theme } = {};
    private _selected_theme?: Theme;
    private _selected_mode: ThemeMode = 'dark';
    private _subscriptions: Subscriptions = [];

    install_theme(theme: Theme) {
        this._themes[theme.name] = theme;
        if (!this._selected_theme)
            this.activate_theme(theme.name);
    }

    activate_theme(theme_name: string): boolean {
        if (this._themes[theme_name]) {
            this._selected_theme = this._themes[theme_name];
            this._publish();
            return true;
        }
        return false;
    }

    get_active_style(): Style {
        const style = this._selected_theme[this._selected_mode];
        if (style) return style;
        const other_mode = this._selected_mode === 'light' ? 'dark' : 'light';
        return this._selected_theme[other_mode];
    }

    toggle_style(): void {
        this._selected_mode = this._selected_mode === 'light' ? 'dark' : 'light';
        this._publish();
    }

    on_set_style(handler: ThemeSelectHandler) {
        // Subscribe to style changes
        if (!this._subscriptions.includes(handler))
            this._subscriptions.push(handler);
    }

    private _publish(): void {
        // Publish to all subscribers
        const style = this.get_active_style();
        this._subscriptions.forEach(sub => sub(style));
    }
}

export { ThemeManager };