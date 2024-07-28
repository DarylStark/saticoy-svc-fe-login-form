// React imports
import { useState } from 'react';

// Styling
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { themeController } from './globals/theme';
import './index.scss'

// Organism
import LoginPage from './components/templates/login_page';

const updateBodyClass = () => {
    document.body.className = themeController.currentStyle?.page['class'] || '';
}

updateBodyClass();

function App() {
    const [chakra_ui_color_mode, setChakraUiColorMode] = useState(themeController.currentStyle?.chakra_mode);

    themeController.eventBus?.on('theme_changed', () => {
        setChakraUiColorMode(themeController.currentStyle?.chakra_mode);
        updateBodyClass();
    });

    // Make sure the theme mode is updated when the user changes the system theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        themeController.raiseForChange();
    });

    return (
        <ChakraProvider>
            <ColorModeProvider value={chakra_ui_color_mode}>
                <LoginPage />
            </ColorModeProvider>
        </ ChakraProvider>
    );
}

export default App;