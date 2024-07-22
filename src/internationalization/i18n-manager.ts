import Repository from '../repository/repository';
import { LocaleData } from './localedata';
import I18nStrategy from './i18n-strategy';

interface I18nManager {
    setDefaultLocaleKey(defaultKey: string): void;
    setStrategy(i18nStrategy: I18nStrategy): void;
    retrieveLocaleKey(): boolean;
    setLocaleKey(key: string): void;
    get selectedLocaleKey(): string;
}

class BaseI18nManager<T extends LocaleData> implements I18nManager {
    private _selectedLocaleKey?: string;

    constructor(
        private _localeRepository: Repository<T>,
        private _strategy?: I18nStrategy,
        private _defaultKey?: string) {
        this._selectedLocaleKey = _defaultKey;
    }

    setDefaultLocaleKey(defaultKey: string): void {
        this._defaultKey = defaultKey;
    }

    setStrategy(strategy: I18nStrategy): void {
        this._strategy = strategy;
    }

    retrieveLocaleKey(): boolean {
        this._selectedLocaleKey = this._strategy?.getLocaleKey() ?? this._defaultKey;
        return this._isValidKey();
    }

    setLocaleKey(key: string): void {
        if (!this._localeRepository.hasName(key))
            throw new Error(`Key "${key}" not found`);
        this._selectedLocaleKey = key;
    }

    get selectedLocaleKey(): string {
        if (!this._isValidKey() || !this._selectedLocaleKey)
            throw new Error('No valid locale key selected');
        return this._selectedLocaleKey;
    }

    private _isValidKey(): boolean {
        return this._selectedLocaleKey !== undefined &&
            this._localeRepository.hasName(this._selectedLocaleKey);
    }
}

export default I18nManager;
export { BaseI18nManager };