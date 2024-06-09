import { Style, Theme, ThemeMode } from './theme';
import ThemeRepository from './theme_repository';

export type StyleSelectHandler<T extends Style> = (selected_style: T) => void;
export type ModeSelectHandler = (selected_mode: ThemeMode) => void;
type StyleSubscriptions<T extends Style> = StyleSelectHandler<T>[];
type ModeSubscriptions = ModeSelectHandler[];

class ThemeManager<T extends Style = Style> {
    private _selected_theme: string = '';
    private _selected_mode: ThemeMode = 'dark';
    private _style_subscriptions: StyleSubscriptions<T> = [];
    private _mode_subscriptions: ModeSubscriptions = [];

    constructor(private _theme_repository: ThemeRepository<T>) { }

    activate_theme(theme_name: string): void {
        this._get_theme_by_name(theme_name);
        this._selected_theme = theme_name;
        this.publish();
    }

    get_active_style(): T {
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

    on_set_style(handler: StyleSelectHandler<T>) {
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

    private _get_style_for_theme(theme_name: string, mode: ThemeMode): T {
        if (mode.toString() in this._get_theme_by_name(theme_name))
            return this._get_theme_by_name(theme_name)[mode.toString()];
        throw new Error(`Theme "${theme_name}" has no mode: "${mode.toString()}"`);
    }
}

export default ThemeManager;