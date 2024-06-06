
import { useState } from 'react';
import LoginPage from './components/templates/login_page';

import { ConfigProvider } from 'antd';
import './index.scss'

import light_theme from './themes/light';
import dark_theme from './themes/dark';

import saticoy_theme from './themes/saticoy';

import { event_bus } from './globals'

function App() {
    const [is_dark_mode, set_dark_mode] = useState(false);


    event_bus.on('toggle_theme', () => {
        set_dark_mode(!is_dark_mode);
    });

    return (
        <ConfigProvider theme={is_dark_mode ? saticoy_theme.dark.antd : saticoy_theme.light.antd}>
            <LoginPage />
        </ConfigProvider>
    );
}

export default App;