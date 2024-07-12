// React imports
import { useState } from 'react';

// Styling
import { ConfigProvider } from 'antd';
import './index.scss'

// Themeing
import { Style } from './theme-manager/theme';
import { theme_manager } from './globals';

// Organism
import LoginPage from './components/templates/login_page';

function set_body_class(style: Style) {
    document.body.className = style.page['class'];
}

theme_manager.onSetStyle(set_body_class);
theme_manager.publish();

function App() {
    // const theme = ugly_theme.dark;
    const [theme, set_theme] = useState(theme_manager.getActiveStyle());

    theme_manager.onSetStyle(set_theme);

    return (
        <ConfigProvider theme={theme?.antd}>
            <LoginPage />
        </ ConfigProvider>
    );
}

export default App;