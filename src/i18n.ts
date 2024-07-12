import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

import { language_manager } from './globals';

// Create the language specifications
const resources: {
    [key: string]: {
        translation: {
            [key: string]: string | {
                [key: string]: string
            }
        }
    }
} = {}

language_manager.get_available_language_codes().forEach(languageCode => {
    resources[languageCode] = { translation: language_manager.get_language_by_code(languageCode).translation }
});

i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        fallbackLng: language_manager.get_default_language_code(),
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        lng: language_manager.get_selected_language(),
        resources: resources
    });


language_manager.eventBus.on('language_changed', (language) => {
    i18n.changeLanguage(language.languageCode);
});

export default i18n;