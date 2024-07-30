// React imports
import { useState } from 'react';

// Styling
import { ChakraProvider, ColorModeProvider, extendTheme, ColorMode } from '@chakra-ui/react';
import { themeController } from './globals/theme';
import { i18nController } from './globals/i18n';

import './index.scss'

// Organism
import LoginPage from './components/templates/login_page';

function App() {
    const [chakra_ui_color_mode, setChakraUiColorMode] = useState(themeController.currentStyle?.chakra_mode);
    const [chakra_ui_theme, setChakraUiTheme] = useState(themeController.currentStyle?.chakra_theme);

    themeController.eventBus?.on('theme_changed', () => {
        setChakraUiColorMode(themeController.currentStyle?.chakra_mode);
        setChakraUiTheme(themeController.currentStyle?.chakra_theme);
    });

    // Make sure the theme mode is updated when the user changes the system theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        themeController.raiseForChange();
    });

    return (
        <ChakraProvider theme={extendTheme(chakra_ui_theme || {})}>
            <ColorModeProvider value={chakra_ui_color_mode}>
                <LoginPage
                    themeController={themeController}
                    localeController={i18nController}
                />
            </ColorModeProvider>
        </ChakraProvider>
    );
}

export default App;