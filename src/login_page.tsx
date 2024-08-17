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

// Template
import LoginPageTemplate from './local_components/templates/login_page_template';

import SaticoyThemeSelectMenu from './saticoy_components/organisms/UserIconMenus/saticoy_theme_select_menu/saticoy_theme_select_menu';
import SaticoyLocaleSelectMenu from './saticoy_components/organisms/UserIconMenus/saticoy_locale_select_menu/saticoy_locale_select_menu';

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
                                <SaticoyLocaleSelectMenu i18nController={i18nController} />
                            </>
                        }
                    />
                </ColorModeProvider>
            </ChakraProvider>
        </I18nextProvider>
    );
}

export default LoginPage;