import Repository from '../repository/repository';
import { Style, Theme, ThemeMode } from './theme';

export type StyleSelectHandler<T extends Style> = (selected_style: T) => void;
export type ModeSelectHandler = (selected_mode: ThemeMode) => void;
type StyleSubscriptions<T extends Style> = StyleSelectHandler<T>[];
type ModeSubscriptions = ModeSelectHandler[];

// TODO: Use `EventBus` instead of a own subscription system
// TODO: Don't rely on exception from the ThemeRepository in `_get_theme_by_name`

class ThemeManager<T extends Style = Style> {
    private _selectedTheme: string = '';
    private _selectedMode: ThemeMode = ThemeMode.Dark;
    private _styleSubscriptions: StyleSubscriptions<T> = [];
    private _modeSubscriptions: ModeSubscriptions = [];

    constructor(private _theme_repository: Repository<Theme<T>>) { }

    activateTheme(theme_name: string): void {
        this._getThemeByName(theme_name);
        this._selectedTheme = theme_name;
        this.publish();
    }

    getActiveStyle(): T {
        this._raiseOnNoActiveTheme();

        try {
            return this._getStyleForName(
                this._selectedTheme,
                this._selectedMode);
        } catch {
            return this._getStyleForName(
                this._selectedTheme,
                this._selectedMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);
        }
    }

    getActiveMode(): ThemeMode {
        return this._selectedMode;
    }

    toggleMode(): void {
        this._selectedMode = this._selectedMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
        this.publish();
    }

    setMode(mode: ThemeMode): void {
        this._selectedMode = mode;
        this.publish();
    }

    onSetStyle(handler: StyleSelectHandler<T>) {
        // Subscribe to style changes
        if (!this._styleSubscriptions.includes(handler))
            this._styleSubscriptions.push(handler);
    }

    onSetMode(handler: ModeSelectHandler) {
        // Subscribe to mode changes
        if (!this._modeSubscriptions.includes(handler))
            this._modeSubscriptions.push(handler);
    }

    offSetStyle(handler: StyleSelectHandler<T>) {
        // Unsubscribe from style changes
        this._styleSubscriptions = this._styleSubscriptions.filter(sub => sub !== handler);
    }

    offSetMode(handler: ModeSelectHandler) {
        // Unsubscribe from mode changes
        this._modeSubscriptions = this._modeSubscriptions.filter(sub => sub !== handler);
    }

    publish(): void {
        this._publishStyle();
        this._publishMode();
    }

    hasDarkMode(): boolean {
        this._raiseOnNoActiveTheme();
        return this._getThemeByName(this._selectedTheme).dark !== undefined;
    }

    hasLightMode(): boolean {
        this._raiseOnNoActiveTheme();
        return this._getThemeByName(this._selectedTheme).light !== undefined;
    }

    hasBothModes(): boolean {
        return this.hasDarkMode() && this.hasLightMode();
    }

    getThemeNames(): string[] {
        return this._theme_repository.getNames();
    }

    private _raiseOnNoActiveTheme(): void {
        if (!this._selectedTheme)
            throw new Error('No active style is set.');
    }

    private _publishStyle(): void {
        // Publish to all subscribers
        const style = this.getActiveStyle();
        this._styleSubscriptions.forEach(sub => sub(style));
    }

    private _publishMode(): void {
        // Publish to all subscribers
        const mode = this.getActiveMode();
        this._modeSubscriptions.forEach(sub => sub(mode));
    }

    private _getThemeByName(theme_name: string): Theme<T> {
        const theme = this._theme_repository.get(theme_name);
        return theme;
    }

    private _getStyleForName(theme_name: string, mode: ThemeMode): T {
        const theme_object = this._getThemeByName(theme_name);
        const real_style = mode == ThemeMode.Light ? theme_object.light : theme_object.dark;
        if (!real_style)
            throw new Error(`Theme "${theme_name}" has no mode: "${mode.toString()}"`);
        return real_style;
    }
}

export default ThemeManager;