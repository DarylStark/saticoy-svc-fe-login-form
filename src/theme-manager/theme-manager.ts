import { Style, Theme, ThemeMode } from './theme';
import ThemeRepository from './theme-repository';

export type StyleSelectHandler<T extends Style> = (selected_style: T) => void;
export type ModeSelectHandler = (selected_mode: ThemeMode) => void;
type StyleSubscriptions<T extends Style> = StyleSelectHandler<T>[];
type ModeSubscriptions = ModeSelectHandler[];

// TODO: Use `EventBus` instead of a own subscription system
// TODO: Don't rely on exception from the ThemeRepository in `_get_theme_by_name`

class ThemeManager<T extends Style = Style> {
    private _selected_theme: string = '';
    private _selected_mode: ThemeMode = ThemeMode.Dark;
    private _style_subscriptions: StyleSubscriptions<T> = [];
    private _mode_subscriptions: ModeSubscriptions = [];

    constructor(private _theme_repository: ThemeRepository<T>) { }

    activate_theme(theme_name: string): void {
        this._get_theme_by_name(theme_name);
        this._selected_theme = theme_name;
        this.publish();
    }

    get_active_style(): T {
        this._raise_on_no_active_theme();

        try {
            return this._get_style_for_theme(
                this._selected_theme,
                this._selected_mode);
        } catch {
            return this._get_style_for_theme(
                this._selected_theme,
                this._selected_mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);
        }
    }

    get_active_mode(): ThemeMode {
        return this._selected_mode;
    }

    toggle_mode(): void {
        this._selected_mode = this._selected_mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
        this.publish();
    }

    set_mode(mode: ThemeMode): void {
        this._selected_mode = mode;
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

    off_set_style(handler: StyleSelectHandler<T>) {
        // Unsubscribe from style changes
        this._style_subscriptions = this._style_subscriptions.filter(sub => sub !== handler);
    }

    off_set_mode(handler: ModeSelectHandler) {
        // Unsubscribe from mode changes
        this._mode_subscriptions = this._mode_subscriptions.filter(sub => sub !== handler);
    }

    publish(): void {
        this._publish_style();
        this._publish_mode();
    }

    has_dark_mode(): boolean {
        this._raise_on_no_active_theme();
        return this._get_theme_by_name(this._selected_theme).dark !== undefined;
    }

    has_light_mode(): boolean {
        this._raise_on_no_active_theme();
        return this._get_theme_by_name(this._selected_theme).light !== undefined;
    }

    has_both_modes(): boolean {
        return this.has_dark_mode() && this.has_light_mode();
    }

    get_theme_names(): string[] {
        return this._theme_repository.get_theme_names();
    }

    private _raise_on_no_active_theme(): void {
        if (!this._selected_theme)
            throw new Error('No active style is set.');
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

    private _get_theme_by_name(theme_name: string): Theme<T> {
        const theme = this._theme_repository.get_theme(theme_name);
        return theme;
    }

    private _get_style_for_theme(theme_name: string, mode: ThemeMode): T {
        const theme_object = this._get_theme_by_name(theme_name);
        const real_style = mode == ThemeMode.Light ? theme_object.light : theme_object.dark;
        if (!real_style)
            throw new Error(`Theme "${theme_name}" has no mode: "${mode.toString()}"`);
        return real_style;
    }
}

export default ThemeManager;