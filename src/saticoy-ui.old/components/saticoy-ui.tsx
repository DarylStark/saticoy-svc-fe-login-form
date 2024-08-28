// React imports
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

// Saticoy imports
import SaticoyUIContext, { SaticoyUIContextProps } from '../context';

// Language
import { I18nextProvider } from 'react-i18next';
import { i18n, i18nController } from '../globals/i18n';

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

    // Context
    const contextValue: SaticoyUIContextProps = {
        themeController: themeController,
        i18nController: i18nController,
    };

    return (
        <SaticoyUIContext.Provider value={contextValue}>
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
        </SaticoyUIContext.Provider>
    );
}

export default SaticoyUI;