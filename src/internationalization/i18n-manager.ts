import Repository from '../repository/repository';
import { LocaleData } from './localedata';
import I18nStrategy from './i18n-strategy';
import EventBus from "../eventbus/eventbus";


interface I18nManager {
    setDefaultLocaleKey(defaultKey: string): void;
    setStrategy(i18nStrategy: I18nStrategy): void;
    retrieveLocaleKey(): boolean;
    setLocaleKey(key: string): void;
    set selectedLocaleKey(key: string);
    get selectedLocaleKey(): string;
}

class BaseI18nManager<T extends LocaleData> implements I18nManager {
    private _selectedLocaleKey?: string;
    public eventBus = new EventBus();

    constructor(
        readonly localeRepository: Repository<T>,
        public defaultKey?: string,
        public strategy?: I18nStrategy) {
        // TODO: Make the `eventBus` a parameter for dependency injection
        this._selectedLocaleKey = defaultKey;
    }

    setDefaultLocaleKey(defaultKey: string): void {
        this.defaultKey = defaultKey;
        this.setLocaleKey(defaultKey);
    }

    setStrategy(strategy?: I18nStrategy): void {
        this.strategy = strategy;
    }

    retrieveLocaleKey(): boolean {
        const new_key = this.strategy?.getLocaleKey() ?? this.defaultKey;
        if (new_key && this._isValidKey(new_key)) {
            this.setLocaleKey(new_key);
            return true;
        }
        return false;
    }

    setLocaleKey(key: string): void {
        if (!this.localeRepository.hasName(key))
            throw new Error(`Key "${key}" not found`);
        this._selectedLocaleKey = key;
        this._raiseLocaleChanged();
        this._saveLocale();
    }

    get selectedLocaleKey(): string {
        if (!this._isValidKey() || !this._selectedLocaleKey)
            throw new Error('No valid locale key selected');
        return this._selectedLocaleKey;
    }

    set selectedLocaleKey(key: string) {
        this.setLocaleKey(key);
    }

    private _isValidKey(key?: string): boolean {
        if (!key)
            key = this._selectedLocaleKey;
        return key !== undefined && this.localeRepository.hasName(key);
    }

    private _raiseLocaleChanged(): void {
        this.eventBus.raise('locale_changed', this._selectedLocaleKey);
    }

    private _saveLocale(): void {
        this.strategy?.saveLocaleKey(this._selectedLocaleKey);
    }
}

export default I18nManager;
export { BaseI18nManager };