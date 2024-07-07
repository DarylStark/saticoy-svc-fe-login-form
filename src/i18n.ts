import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: ['en', 'nl'],
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        backend: {
            loadPath: 'locales/{{lng}}/{{ns}}.json',
        },
        detection: {
            order: ['queryString', 'localStorage', 'navigator'],
            lookupQuerystring: 'lang',
            lookupLocalStorage: 'last_language',
        },
    });

i18n.on('initialized', (options) => {
    console.log('Initialized with languages:', i18n.languages);
});


export default i18n;