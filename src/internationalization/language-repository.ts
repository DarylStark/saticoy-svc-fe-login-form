import { language } from "./language"

interface languageRepository<T extends language> {
    get_langauge(language_name: string): T;
    get_language_names(): string[];
}

class manualLanguageRepository<T extends language> implements languageRepository<T> {
    private _languages: { [key: string]: T } = {};

    install_language(language: T) {
        // TODO: Make sure the languageCode is in the correct format (xx-XX)
        this._languages[language.languageCode] = language;
    }

    install_languages(languages: T[]) {
        languages.forEach(language => this.install_language(language));
    }

    get_langauge(languageCode: string): T {
        if (!this._languages[languageCode])
            throw new Error(`Language with code "${languageCode}" is not found.`);
        return this._languages[languageCode];
    }

    get_language_names(): string[] {
        return Object.keys(this._languages);
    }
}

export { manualLanguageRepository };
export default languageRepository;