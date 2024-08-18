import Repository from '../saticoy-core/repository/repository';
import EventBus from '../eventbus/eventbus';
import I18nRetriever from './i18n-retriever';
import I18nSaver from './i18n-saver';
import { LocaleData } from './localedata';


class I18nController<T extends LocaleData = LocaleData> {
    private _selectedLocale?: string = undefined;
    public defaultLocale?: string;
    private _isAutoLocale: boolean = true;

    constructor(
        public readonly localeRepository: Repository<T>,
        public eventBus?: EventBus,
        public retrievers?: I18nRetriever[],
        public saver?: I18nSaver) { }


    retrieveLocaleAutomatically(): string | undefined {
        if (this.retrievers === undefined)
            return undefined;

        for (const retriever of this.retrievers) {
            const theme = retriever.retrieveLocale();
            if (theme !== undefined) {
                this._isAutoLocale = retriever.isAutoLocale();
                return theme;
            }
        }
        return undefined;
    }

    set selectedLocale(theme: string | undefined) {
        this._selectedLocale = theme;
        this.saver?.saveLocale(this.selectedLocale);
        this.raiseForChange();
    }

    get selectedLocale(): string | undefined {
        return this._selectedLocale || this.retrieveLocaleAutomatically() || this.defaultLocale;
    }

    set isAutoLocale(value: boolean) {
        this._isAutoLocale = value;
        if (value) {
            this._selectedLocale = undefined;
            this.saver?.saveLocale(undefined);
        }
        this.raiseForChange();
    }

    get isAutoLocale(): boolean {
        return this._isAutoLocale;
    }

    raiseForChange() {
        this.eventBus?.raise('i18n_locale_changed', this.selectedLocale);
    }
}

export default I18nController;