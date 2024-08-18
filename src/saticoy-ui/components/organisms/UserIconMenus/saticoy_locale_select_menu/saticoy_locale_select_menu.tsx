import { useTranslation } from 'react-i18next';
import I18nController from "../../../../../saticoy-core/internationalization/i18n-controller";
import { i18NextLocaleData } from '../../../../languages/i18next_locale_data';
import LocaleSelectMenu from '../../../molecule/user_icon_menu/locale_select_menu/locale_select_menu';

interface SaticoyLocaleSelectMenuProps {
    i18nController: I18nController<i18NextLocaleData>
}

function SaticoyLocaleSelectMenu(props: SaticoyLocaleSelectMenuProps) {
    const { t } = useTranslation();
    const { i18nController } = props;

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
export type { SaticoyLocaleSelectMenuProps }