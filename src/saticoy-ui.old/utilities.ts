import { i18nController } from './globals/i18n'

const extendLanguage = (locale: string, data: {
    [key: string]: string | {
        [key: string]: string
    }
}) => {
    const localeObject = i18nController.localeRepository.get(locale);
    localeObject.i18next.translation = { ...localeObject.i18next.translation, ...data };
};

export { extendLanguage }