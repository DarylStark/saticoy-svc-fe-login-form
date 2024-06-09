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

class ThemeRepository {
    private _themes: { [key: string]: Theme } = {};

    install_theme(theme: Theme) {
        this._themes[theme.name] = theme;
    }

    get_theme(theme_name: string): Theme {
        return this._themes[theme_name];
    }
}

class ThemeManager {
    private _selected_theme: string = '';
    private _selected_mode: ThemeMode = 'dark';
    private _style_subscriptions: StyleSubscriptions = [];
    private _mode_subscriptions: ModeSubscriptions = [];

    constructor(private _theme_repository: ThemeRepository) { }

    activate_theme(theme_name: string): void {
        this._get_theme_by_name(theme_name);
        this._selected_theme = theme_name;
        this.publish();
    }

    get_active_style(): Style {
        try {
            return this._get_style_for_theme(
                this._selected_theme,
                this._selected_mode);
        } catch {
            return this._get_style_for_theme(
                this._selected_theme,
                this._selected_mode === 'light' ? 'dark' : 'light');
        }
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

    private _get_theme_by_name(theme_name: string): Theme {
        const theme = this._theme_repository.get_theme(theme_name);
        if (!theme)
            throw new Error(`Theme "${theme_name}" is not in the repository`);
        return theme;
    }

    private _get_style_for_theme(theme_name: string, mode: ThemeMode): Style {
        if (mode.toString() in this._get_theme_by_name(theme_name))
            return this._get_theme_by_name(theme_name)[mode.toString()];
        throw new Error(`Theme "${theme_name}" has no mode: "${mode.toString()}"`);
    }
}

export { ThemeRepository, ThemeManager };