import EventBus from "../eventbus/eventbus";
import { language } from "./language";
import languageRepository from "./language-repository";

class languageManager<T> {
    private _selected_language: string = '';
    public eventBus = new EventBus();

    constructor(private _languageRepository: languageRepository<T>) { }

    activate_language(languageCode: string): void {
        const language = this._get_language_by_code(languageCode);
        this._selected_language = languageCode;
        this.eventBus.raise("language_changed", language);
    }

    get_available_language_codes(): string[] {
        return this._languageRepository.get_language_names();
    }

    private _get_language_by_code(languageCode: string): language<T> {
        return this._languageRepository.get_langauge(languageCode);
    }
}

export default languageManager;