import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

import { i18n_manager } from './globals';

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

i18n_manager.localeRepository.getNames(true).forEach(i18n_key => {
    resources[i18n_key] = i18n_manager.localeRepository.get(i18n_key).i18next;
});

i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        fallbackLng: i18n_manager.defaultKey,
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        lng: i18n_manager.selectedLocaleKey,
        resources: resources
    });


i18n_manager.eventBus.on('locale_changed', (key) => {
    i18n.changeLanguage(key);
});

export default i18n;