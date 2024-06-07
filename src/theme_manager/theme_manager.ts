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
    page: {
        'class': string
    },
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

export type StyleSelectHandler = (selected_style: Style) => void;
export type ModeSelectHandler = (selected_mode: ThemeMode) => void;
type StyleSubscriptions = StyleSelectHandler[];
type ModeSubscriptions = ModeSelectHandler[];

class ThemeManager {
    private _themes: { [key: string]: Theme } = {};
    private _selected_theme?: Theme;
    private _selected_mode: ThemeMode = 'dark';
    private _style_subscriptions: StyleSubscriptions = [];
    private _mode_subscriptions: ModeSubscriptions = [];

    install_theme(theme: Theme) {
        this._themes[theme.name] = theme;
        if (!this._selected_theme)
            this.activate_theme(theme.name);
    }

    activate_theme(theme_name: string): void {
        const theme = this._themes[theme_name]
        if (!theme)
            throw new Error(`Theme ${theme_name} not found`);
        this._selected_theme = this._themes[theme_name];
        this.publish();
    }

    get_active_style(): Style {
        const style = this._selected_theme[this._selected_mode];
        if (style) return style;
        const other_mode = this._selected_mode === 'light' ? 'dark' : 'light';
        return this._selected_theme[other_mode];
    }

    get_active_mode(): ThemeMode {
        return this._selected_mode;
    }

    toggle_mode(): void {
        this._selected_mode = this._selected_mode === 'light' ? 'dark' : 'light';
        this.publish();
    }

    on_set_style(handler: StyleSelectHandler) {
        // Subscribe to style changes
        if (!this._style_subscriptions.includes(handler))
            this._style_subscriptions.push(handler);
    }

    on_set_mode(handler: ModeSelectHandler) {
        // Subscribe to mode changes
        if (!this._mode_subscriptions.includes(handler))
            this._mode_subscriptions.push(handler);
    }

    private _publish_style(): void {
        // Publish to all subscribers
        const style = this.get_active_style();
        this._style_subscriptions.forEach(sub => sub(style));
    }

    private _publish_mode(): void {
        // Publish to all subscribers
        const mode = this.get_active_mode();
        this._mode_subscriptions.forEach(sub => sub(mode));
    }

    publish(): void {
        this._publish_style();
        this._publish_mode();
    }
}

export { ThemeManager };