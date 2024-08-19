import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import LocaleSelectMenu from '../../../molecule/user_icon_menu/locale_select_menu/locale_select_menu';
import SaticoyUIContext from '../../../../context';

function SaticoyLocaleSelectMenu() {
    const { t } = useTranslation();
    const context = useContext(SaticoyUIContext);

    const { i18nController } = context;

    function getLocales() {
        const locales = i18nController.localeRepository.getNames(false);
        return locales.map(l => ({ 'name': t(`locales.${l}`), value: l }));
    }

    function getSelectedLocale(): string {
        if (i18nController.isAutoLocale) return 'auto';
        return i18nController.selectedLocale || 'auto';
    }

    // Update the locale when the locale changes
    const updateLocale = (locale: string) => {
        if (locale === 'auto')
            return i18nController.isAutoLocale = true;
        i18nController.selectedLocale = locale;
    }

    return <LocaleSelectMenu
        locales={getLocales()}
        selectedLocale={getSelectedLocale()}
        onChange={updateLocale}
        stringAutomaticLanguage={t('locales.automatic_locale')}
    />
}

export default SaticoyLocaleSelectMenu