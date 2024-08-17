// React imports
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Language
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// Styling
import { ChakraProvider, ColorModeProvider, extendTheme } from '@chakra-ui/react';
import { themeController } from './globals/theme';
import { i18nController } from './globals/i18n';

// Components
import LocaleSelectMenu from './components/organisms/user_icon_menus/locale_select_menu/locale_select_menu';

// Template
import LoginPageTemplate from './local_components/templates/login_page_template';

import SaticoyThemeSelectMenu from './saticoy_components/organisms/UserIconMenus/saticoy_theme_select_menu/saticoy_theme_select_menu';

function LocalLocaleSelectMenu() {
    const { t } = useTranslation();

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

function LoginPage() {
    // State for theming
    const [chakra_ui_color_mode, setChakraUiColorMode] = useState(themeController.currentStyle?.chakra_mode);
    const [chakra_ui_theme, setChakraUiTheme] = useState(themeController.currentStyle?.chakra_theme);

    // Translation
    const { t } = useTranslation();

    // Update the theme when the theme changes
    themeController.eventBus?.on('theme_changed', () => {
        setChakraUiColorMode(themeController.currentStyle?.chakra_mode);
        setChakraUiTheme(themeController.currentStyle?.chakra_theme);
    });

    // Make sure the theme mode is updated when the user changes the system theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        themeController.raiseForChange();
    });

    return (
        <I18nextProvider i18n={i18n}>
            <ChakraProvider theme={extendTheme(chakra_ui_theme || {})}>
                <ColorModeProvider value={chakra_ui_color_mode}>
                    <Helmet>
                        <title>{t('login_page.title')}</title>
                    </Helmet>
                    <LoginPageTemplate
                        headerMenus={
                            <>
                                <SaticoyThemeSelectMenu themeController={themeController} />
                                <LocalLocaleSelectMenu />
                            </>
                        }
                    />
                </ColorModeProvider>
            </ChakraProvider>
        </I18nextProvider>
    );
}

export default LoginPage;