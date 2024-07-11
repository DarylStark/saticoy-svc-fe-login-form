import EventBus from "../eventbus/eventbus";
import { language } from "./language";
import languageRepository from "./language-repository";

class languageManager<T> {
    private _selected_language: string = '';
    private _default_language: string = '';
    public eventBus = new EventBus();

    constructor(private _languageRepository: languageRepository<T>) { }

    activate_language(languageCode: string): void {
        const language = this.get_language_by_code(languageCode);
        this._selected_language = languageCode;
        this.eventBus.raise("language_changed", language);
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

    get_all_languages(): { [key: string]: language<T> } {
        const return_value: { [key: string]: language<T> } = {}
        this._languageRepository.get_language_names().forEach(languageCode => {
            return_value[languageCode] = this.get_language_by_code(languageCode);
        });
        return return_value;
    }

    get_language_by_code(languageCode: string): language<T> {
        return this._languageRepository.get_langauge(languageCode);
    }
}

export default languageManager;