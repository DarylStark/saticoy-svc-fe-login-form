// React imports
import { useState } from 'react';

// Styling
import { ConfigProvider } from 'antd';
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
    themeController.eventBus?.on('mode_changed', () => {
        setTheme(themeController.currentStyle);
        updateBodyClass();
    });

    return (
        <ConfigProvider theme={theme?.antd}>
            <LoginPage />
        </ ConfigProvider>
    );
}

export default App;