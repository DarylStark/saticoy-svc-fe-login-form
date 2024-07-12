import { Language } from "./language"

interface LanguageRepository<T extends Language> {
    getLanguage(language_name: string): T;
    getLanguageNames(): string[];
}

class ManualLanguageRepository<T extends Language> implements LanguageRepository<T> {
    private _languages: { [key: string]: T } = {};

    installLanguage(language: T) {
        // TODO: Make sure the languageCode is in the correct format (xx-XX)
        this._languages[language.languageCode] = language;
    }

    installLanguages(languages: T[]) {
        languages.forEach(language => this.installLanguage(language));
    }

    getLanguage(languageCode: string): T {
        if (!this._languages[languageCode])
            throw new Error(`Language with code "${languageCode}" is not found.`);
        return this._languages[languageCode];
    }

    getLanguageNames(): string[] {
        return Object.keys(this._languages);
    }
}

export { ManualLanguageRepository };
export default LanguageRepository;