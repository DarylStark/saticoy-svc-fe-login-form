import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

import { language_manager } from './globals';

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

language_manager.getAvailableLanguageCodes().forEach(languageCode => {
    resources[languageCode] = language_manager.getLanguageByCode(languageCode).i18next
});

i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        fallbackLng: language_manager.getDefaultLanguageCode(),
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        lng: language_manager.getSelectedLanguage(),
        resources: resources
    });


language_manager.eventBus.on('language_changed', (language) => {
    i18n.changeLanguage(language.languageCode);
});

export default i18n;