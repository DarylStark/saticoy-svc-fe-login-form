// React imports
import { useState } from 'react';

// Styling
import { ConfigProvider } from 'antd';
import { ChakraProvider } from '@chakra-ui/react';
import './index.scss'
import { themeController } from './globals/theme';

// Organism
import LoginPage from './components/templates/login_page';

const updateBodyClass = () => {
    document.body.className = themeController.currentStyle?.page['class'] || '';
}

updateBodyClass();

function App() {
    const [theme, setTheme] = useState(themeController.currentStyle);

    themeController.eventBus?.on('theme_changed', () => {
        setTheme(themeController.currentStyle);
        updateBodyClass();
    });

    // Make sure the theme mode is updated when the user changes the system theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        themeController.raiseForChange();
    });

    return (
        <ChakraProvider>
            <LoginPage />
        </ ChakraProvider>
    );
}

export default App;