// React imports
import { useState } from 'react';

// Styling
import { ConfigProvider } from 'antd';
import './index.scss'

// Themeing
import { theme_manager } from './globals';
import saticoy_theme from './themes/saticoy';
theme_manager.install_theme(saticoy_theme);

import LoginPage from './components/templates/login_page';

function App() {
    // const theme = ugly_theme.dark;
    const [theme, set_theme] = useState(theme_manager.get_active_style());

    theme_manager.on_set_style(set_theme);

    return (
        <ConfigProvider theme={theme?.antd}>
            <LoginPage />
        </ ConfigProvider>
    );
}

export default App;