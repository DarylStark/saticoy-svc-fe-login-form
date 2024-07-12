import { language } from "./language"

interface languageRepository<T> {
    get_langauge(language_name: string): language<T>;
    get_language_names(): string[];
}

class manualLanguageRepository<T> implements languageRepository<T> {
    private _languages: { [key: string]: language<T> } = {};

    install_language(language: language<T>) {
        // TODO: Make sure the languageCode is in the correct format (xx-XX)
        this._languages[language.languageCode] = language;
    }

    install_languages(languages: language<T>[]) {
        languages.forEach(language => this.install_language(language));
    }

    get_langauge(languageCode: string): language<T> {
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