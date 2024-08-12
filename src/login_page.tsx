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
import ThemeSelectMenu from './components/organisms/theme_select_menu/theme_select_menu';
import LocaleSelectMenu from './components/organisms/locale_select_menu/locale_select_menu';

// Template
import LoginPageTemplate from './components/templates/login_page_template';
import { ThemeMode } from './theme-controller/theme';

function LocalThemeSelectMenu() {
    function getSelectedThemeMode(): 'dark' | 'light' | 'auto' {
        if (themeController.isAutoMode) return 'auto';
        return themeController.selectedMode || 'auto';
    }

    function getSelectedTheme(): string {
        if (themeController.isAutoTheme) return 'auto';
        return themeController.selectedTheme || 'auto';
    }

    function getThemes() {
        const themes = themeController.themeRepository.getNames(true);
        return themes.map(t => ({ 'name': t, value: t }));
    }

    // Update the mode when the mode changes
    const updateMode = (mode: string) => {
        if (mode === 'auto')
            return themeController.isAutoMode = true;
        themeController.selectedMode = mode === 'dark' ? ThemeMode.Dark : ThemeMode.Light;
    }

    // Update the theme when the theme changes
    const updateTheme = (theme: string) => {
        if (theme === 'auto')
            return themeController.isAutoTheme = true;
        themeController.selectedTheme = theme
    }

    // TODO: When going from Automatic to 'Dark', the icon is not updated

    // The component
    return <ThemeSelectMenu
        themes={getThemes()}
        selectedMode={getSelectedThemeMode()}
        selectedTheme={getSelectedTheme()}
        onChangeMode={updateMode}
        onChangeTheme={updateTheme}
    />
}

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
                                <LocalThemeSelectMenu />
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