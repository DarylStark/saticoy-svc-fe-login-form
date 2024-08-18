import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import { i18nController } from './globals/i18n';

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

export default i18n;