import EventBus from "../eventbus/eventbus";
import { Language } from "./language";
import Repository from "../repository/repository";

// languageStorage managers store the selected language for the user.
interface LanguageSaver {
    clear(): void;
    saveLanguage(languageCode: string): void;
}

class localStorageLanguageSaver implements LanguageSaver {
    constructor(private _key: string) { }

    clear(): void {
        localStorage.removeItem(this._key);
    }

    saveLanguage(languageCode: string): void {
        localStorage.setItem(this._key, languageCode);
    }
}

// languageSelectors select a language based on a certain criteria.
interface LanguageSelector {
    getLanguage(): string | undefined;
}

class LocalStorageLanguageSelector implements LanguageSelector {
    constructor(private _key: string) { }

    getLanguage(): string | undefined {
        const storage_value = localStorage.getItem(this._key)
        return storage_value !== null ? storage_value.toString() : undefined;
    }
}

class BrowserLanguageSelector implements LanguageSelector {
    getLanguage(): string | undefined {
        return navigator.language;
    }
}

// languageManager class manages languages
class LanguageManager<T extends Language> {
    private _selectedLanguage: string = '';
    private _defaultLanguage: string = '';
    public eventBus = new EventBus();
    public automaticLanguageSelectors: LanguageSelector[] = [new BrowserLanguageSelector()];
    public languageSavers: LanguageSaver[] = [new localStorageLanguageSaver('selected-language')];
    public languageSelectors: LanguageSelector[] = [
        new LocalStorageLanguageSelector('selected-language'),
        ...this.automaticLanguageSelectors
    ];

    constructor(private _languageRepository: Repository<T>) {
    }

    activateLanguage(languageCode: string, save: boolean = true): void {
        const language = this.getLanguageByCode(languageCode);
        this._selectedLanguage = languageCode;
        if (save)
            this.languageSavers.forEach(saver => saver.saveLanguage(languageCode));
        this.eventBus.raise("language_changed", language);
    }

    selectLanguage(): void {
        let language = this._defaultLanguage;
        for (let i = 0; i < this.languageSelectors.length; i++) {
            const languageCode = this.languageSelectors[i].getLanguage();
            if (languageCode && this._languageRepository.getNames().includes(languageCode)) {
                language = languageCode;
                break;
            }
        }
        this.activateLanguage(language, false);
    }

    setAutomaticLanguage(): void {
        let language = this._defaultLanguage;
        for (let i = 0; i < this.automaticLanguageSelectors.length; i++) {
            const languageCode = this.automaticLanguageSelectors[i].getLanguage();
            if (languageCode && this._languageRepository.getNames().includes(languageCode)) {
                language = languageCode;
                break;
            }
        }
        this.activateLanguage(language, false);
        this.languageSavers.forEach(saver => saver.clear());
    }

    setDefaultLanguage(languageCode: string): void {
        this._defaultLanguage = languageCode;
    }

    getAvailableLanguageCodes(): string[] {
        return this._languageRepository.getNames();
    }

    getDefaultLanguageCode(): string {
        return this._defaultLanguage;
    }

    getSelectedLanguage(): string {
        return this._selectedLanguage;
    }

    getAllLanguages(): { [key: string]: T } {
        const returnValue: { [key: string]: T } = {}
        this._languageRepository.getNames().forEach(languageCode => {
            returnValue[languageCode] = this.getLanguageByCode(languageCode);
        });
        return returnValue;
    }

    getLanguageByCode(languageCode: string): T {
        return this._languageRepository.get(languageCode);
    }
}

export default LanguageManager;