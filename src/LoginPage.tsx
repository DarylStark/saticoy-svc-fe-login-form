// React imports
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

// Language
import { I18nextProvider } from 'react-i18next';
import './i18n'
import i18n from './i18n';

// Styling
import { ChakraProvider, ColorModeProvider, extendTheme } from '@chakra-ui/react';
import { themeController } from './globals/theme';
import { i18nController } from './globals/i18n';

// Template
import LoginPageTemplate from './components/templates/login_page_template';


function LoginPage() {
    const [chakra_ui_color_mode, setChakraUiColorMode] = useState(themeController.currentStyle?.chakra_mode);
    const [chakra_ui_theme, setChakraUiTheme] = useState(themeController.currentStyle?.chakra_theme);

    const { t } = useTranslation();

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
                        themeController={themeController}
                        localeController={i18nController}
                    />
                </ColorModeProvider>
            </ChakraProvider>
        </I18nextProvider>
    );
}

export default LoginPage;