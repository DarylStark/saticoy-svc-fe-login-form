import Repository from '../repository/repository';
import EventBus from '../eventbus/eventbus';
import { Style, Theme, ThemeMode } from './theme';
import ThemeRetriever from './theme-retriever';
import ThemeSaver from './theme-saver';

class ThemeController<T extends Style = Style> {
    private _selectedMode?: ThemeMode = undefined;
    private _selectedTheme?: string = undefined;
    public defaultMode: ThemeMode = ThemeMode.Dark;
    public defaultTheme?: string;
    private _isAutoMode: boolean = false;
    private _isAutoTheme: boolean = true;

    constructor(
        public readonly themeRepository: Repository<Theme<T>>,
        public eventBus?: EventBus,
        public retrievers?: ThemeRetriever[],
        public saver?: ThemeSaver) { }

    retrieveModeAutomatically(): ThemeMode | undefined {
        if (this.retrievers === undefined)
            return undefined;

        for (const retriever of this.retrievers) {
            const mode = retriever.retrieveMode();
            if (mode !== undefined) {
                this._isAutoMode = retriever.isAutoMode();
                return mode;
            }
        }
        return undefined;
    }

    retrieveThemeAutomatically(): string | undefined {
        if (this.retrievers === undefined)
            return undefined;

        for (const retriever of this.retrievers) {
            const theme = retriever.retrieveTheme();
            if (theme !== undefined) {
                this._isAutoTheme = retriever.isAutoMode();
                return theme;
            }
        }
        return undefined;
    }

    set selectedMode(mode: ThemeMode | undefined) {
        this._selectedMode = mode;
        this.saver?.saveMode(this.selectedMode);
        this._isAutoMode = false;
        this.raiseForChange();
    }

    get selectedMode(): ThemeMode | undefined {
        return this._selectedMode || this.retrieveModeAutomatically() || this.defaultMode;
    }

    set selectedTheme(theme: string | undefined) {
        this._selectedTheme = theme;
        this.saver?.saveTheme(this.selectedTheme);
        this.raiseForChange();
    }

    get selectedTheme(): string | undefined {
        return this._selectedTheme || this.retrieveThemeAutomatically() || this.defaultTheme;
    }

    get currentStyle(): T | undefined {
        if (!this.selectedTheme) return undefined;

        const theme = this.themeRepository.get(this.selectedTheme);
        if (!theme) return undefined;

        if (this.selectedMode === ThemeMode.Light) return theme.light ?? theme.dark;
        if (this.selectedMode === ThemeMode.Dark) return theme.dark ?? theme.light;

        return theme.dark ?? theme.light;
    }

    set isAutoMode(value: boolean) {
        this._isAutoMode = value;

        if (value) {
            this._selectedMode = undefined;
            this.saver?.saveMode(undefined);
        } else {

            this._selectedMode = this.retrieveModeAutomatically() || this.defaultMode;
            this.saver?.saveMode(this.selectedMode);
        }
        this.raiseForChange();
    }

    get isAutoMode(): boolean {
        return this._isAutoMode;
    }

    set isAutoTheme(value: boolean) {
        this._isAutoTheme = value;
        if (value) {
            this._selectedTheme = undefined;
            this.saver?.saveTheme(undefined);
        }
        this.raiseForChange();
    }

    get isAutoTheme(): boolean {
        return this._isAutoTheme;
    }

    toggleMode() {
        this.selectedMode = this.selectedMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
    }

    hasDarkStyle(): boolean {
        if (this.selectedTheme) {
            const theme = this.themeRepository.get(this.selectedTheme);
            return theme.dark !== undefined;
        }
        return false
    }

    hasLightStyle(): boolean {
        if (this.selectedTheme) {
            const theme = this.themeRepository.get(this.selectedTheme);
            return theme.light !== undefined;
        }
        return false
    }

    hasBothStyles(): boolean {
        return this.hasDarkStyle() && this.hasLightStyle();
    }

    raiseForChange() {
        this.eventBus?.raise('theme_changed', this.currentStyle);
    }
}

export default ThemeController;