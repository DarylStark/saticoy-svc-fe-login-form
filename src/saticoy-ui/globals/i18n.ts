import Repository from "../../saticoy-core/repository/repository";
import { BrowserRetriever, LocalPreferencesRetriever } from "../../saticoy-core/internationalization/i18n-retriever";
import { eventBus } from './eventbus'
import { LocalPreferencesSaver } from "../../saticoy-core/internationalization/i18n-saver";

import { i18NextLocaleData } from '../locales/i18next-locale-data';
import en_US from "../locales/en-US";
import nl_NL from "../locales/nl-NL";
import I18nController from "../../saticoy-core/internationalization/i18n-controller";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

// Repository
const localeRepo = new Repository<i18NextLocaleData>();
localeRepo.add(en_US, "en-US", ["en"]);
localeRepo.add(nl_NL, "nl-NL", ["nl"]);

// Controller
const i18nController = new I18nController<i18NextLocaleData>(
    localeRepo,
    eventBus,
    [
        new LocalPreferencesRetriever("locale"),
        new BrowserRetriever(),
    ]
);
i18nController.saver = new LocalPreferencesSaver("locale");
i18nController.defaultLocale = "en-US";
i18nController.retrieveLocaleAutomatically();

// Create the language specifications
const resources: {
    [key: string]: {
        [key: string]: {
            [key: string]: string | {
                [key: string]: string
            }
        }
    }
} = {}

// List with all installed locales
i18nController.localeRepository.getNames(true).forEach(i18n_key => {
    resources[i18n_key] = i18nController.localeRepository.get(i18n_key).i18next;
});

// Initialize the i18n instance
i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        fallbackLng: i18nController.defaultLocale,
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        lng: i18nController.selectedLocale,
        resources: resources
    });


// Listen for changes in the locale
i18nController.eventBus?.on('i18n_locale_changed', (key) => {
    i18n.changeLanguage(key);
});

export { i18nController, localeRepo, i18n };