// React imports
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

// Language
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

// Styling
import { ChakraProvider, ColorModeProvider, extendTheme } from '@chakra-ui/react';
import { themeController } from '../globals/theme';

interface SaticoyUIProps {
    pageTitle: string
    children: React.ReactNode
}

function SaticoyUI(props: SaticoyUIProps) {
    // State for theming
    const [chakra_ui_color_mode, setChakraUiColorMode] = useState(themeController.currentStyle?.chakra_mode);
    const [chakra_ui_theme, setChakraUiTheme] = useState(themeController.currentStyle?.chakra_theme);

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
                        <title>{props.pageTitle}</title>
                    </Helmet>
                    {props.children}
                </ColorModeProvider>
            </ChakraProvider>
        </I18nextProvider>
    );
}

export default SaticoyUI;