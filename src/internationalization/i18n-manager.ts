import Repository from '../repository/repository';
import { LocaleData } from './localedata';
import I18nStrategy from './i18n-strategy';

interface I18nManager {
    setDefaultLanguage(defaultLanguage: string): void;
    setStrategy(languageSelector: I18nStrategy): void;
    retrieveLanguage(): boolean;
    get selectedLanguage(): string;
}

class BaseI18nManager<T extends LocaleData> implements I18nManager {
    private _selectedLanguage?: string;

    constructor(
        private _languageRepository: Repository<T>,
        private _strategy?: I18nStrategy,
        private _defaultLanguage?: string) {
        this._selectedLanguage = _defaultLanguage;
    }

    setDefaultLanguage(defaultLanguage: string): void {
        this._defaultLanguage = defaultLanguage;
    }

    setStrategy(strategy: I18nStrategy): void {
        this._strategy = strategy;
    }

    retrieveLanguage(): boolean {
        this._selectedLanguage = this._strategy?.getLanguage() ?? this._defaultLanguage;
        return this._isValidLanguage();
    }

    setLanguage(language: string): void {
        if (!this._languageRepository.hasName(language))
            throw new Error(`Language "${language}" not found`);
        this._selectedLanguage = language;
    }

    get selectedLanguage(): string {
        if (!this._isValidLanguage() || !this._selectedLanguage)
            throw new Error('No valid language selected');
        return this._selectedLanguage;
    }

    private _isValidLanguage(): boolean {
        return this._selectedLanguage !== undefined &&
            this._languageRepository.hasName(this._selectedLanguage);
    }
}

export default I18nManager;
export { BaseI18nManager };