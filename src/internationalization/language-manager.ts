import EventBus from "../eventbus/eventbus";
import { language } from "./language";
import languageRepository from "./language-repository";

// languageStorage managers store the selected language for the user.
interface languageSaver {
    clear(): void;
    save_language(languageCode: string): void;
}

class localStorageLanguageSaver implements languageSaver {
    constructor(private _key: string) { }

    clear(): void {
        localStorage.removeItem(this._key);
    }

    save_language(languageCode: string): void {
        localStorage.setItem(this._key, languageCode);
    }
}

// languageSelectors select a language based on a certain criteria.
interface languageSelector {
    get_language(): string | undefined;
}

class localStorageLanguageSelector implements languageSelector {
    constructor(private _key: string) { }

    get_language(): string | undefined {
        const storage_value = localStorage.getItem(this._key)
        return storage_value !== null ? storage_value.toString() : undefined;
    }
}

class browserLanguageSelector implements languageSelector {
    get_language(): string | undefined {
        return navigator.language;
    }
}

// languageManager class manages languages
class languageManager<T extends language> {
    private _selected_language: string = '';
    private _default_language: string = '';
    public eventBus = new EventBus();
    public automaticLanguageSelectors: languageSelector[] = [new browserLanguageSelector()];
    public languageSavers: languageSaver[] = [new localStorageLanguageSaver('selected-language')];
    public languageSelectors: languageSelector[] = [
        new localStorageLanguageSelector('selected-language'),
        ...this.automaticLanguageSelectors
    ];

    constructor(private _languageRepository: languageRepository<T>) {
    }

    activate_language(languageCode: string, save: boolean = true): void {
        const language = this.get_language_by_code(languageCode);
        this._selected_language = languageCode;
        if (save)
            this.languageSavers.forEach(saver => saver.save_language(languageCode));
        this.eventBus.raise("language_changed", language);
    }

    select_language(): void {
        let language = this._default_language;
        for (let i = 0; i < this.languageSelectors.length; i++) {
            const languageCode = this.languageSelectors[i].get_language();
            if (languageCode && this._languageRepository.get_language_names().includes(languageCode)) {
                language = languageCode;
                break;
            }
        }
        this.activate_language(language, false);
    }

    set_automatic_language(): void {
        let language = this._default_language;
        for (let i = 0; i < this.automaticLanguageSelectors.length; i++) {
            const languageCode = this.automaticLanguageSelectors[i].get_language();
            if (languageCode && this._languageRepository.get_language_names().includes(languageCode)) {
                language = languageCode;
                break;
            }
        }
        this.activate_language(language, false);
        this.languageSavers.forEach(saver => saver.clear());
    }

    set_default_language(languageCode: string): void {
        this._default_language = languageCode;
    }

    get_available_language_codes(): string[] {
        return this._languageRepository.get_language_names();
    }

    get_default_language_code(): string {
        return this._default_language;
    }

    get_selected_language(): string {
        return this._selected_language;
    }

    get_all_languages(): { [key: string]: T } {
        const return_value: { [key: string]: T } = {}
        this._languageRepository.get_language_names().forEach(languageCode => {
            return_value[languageCode] = this.get_language_by_code(languageCode);
        });
        return return_value;
    }

    get_language_by_code(languageCode: string): T {
        return this._languageRepository.get_langauge(languageCode);
    }
}

export default languageManager;