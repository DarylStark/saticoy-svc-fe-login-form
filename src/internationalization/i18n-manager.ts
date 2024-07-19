import Repository from '../repository/repository';
import { Language } from './language';
import LanguageSelector from './language-selector';

interface I18nManager {
    setDefaultLanguage(defaultLanguage: string): void;
    setLanguageSelector(languageSelector: LanguageSelector): void;
    retrieveLanguage(): void;
    get selectedLanguage(): string;
}

class BaseI18nManager<T extends Language> implements I18nManager {
    private _selectedLanguage?: string;
    private _defaultLanguage?: string;

    constructor(
        private _languageRepository: Repository<T>,
        private _languageSelector?: LanguageSelector) {

        this.retrieveLanguage();
    }

    setDefaultLanguage(defaultLanguage: string): void {
        this._defaultLanguage = defaultLanguage;
    }

    setLanguageSelector(languageSelector: LanguageSelector): void {
        this._languageSelector = languageSelector;
    }

    retrieveLanguage(): void {
        this._selectedLanguage = undefined;
        if (this._languageSelector)
            this._selectedLanguage = this._languageSelector.getLanguage();
        if (!this._selectedLanguage)
            this._selectedLanguage = this._defaultLanguage;
    }

    private _isValidLanguage(): boolean {
        return this._selectedLanguage !== undefined &&
            this._languageRepository.hasName(this._selectedLanguage);
    }

    get selectedLanguage(): string {
        if (!this._isValidLanguage() || !this._selectedLanguage)
            throw Error('No valid language selected');
        return this._selectedLanguage;
    }
}

export default I18nManager;
export { BaseI18nManager };