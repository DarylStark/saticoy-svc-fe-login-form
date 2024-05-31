
import { useState } from 'react';
import LoginPage from './components/templates/login_page';

import { ConfigProvider } from 'antd';
import './index.scss'

import light_theme from './themes/light';
import dark_theme from './themes/dark';

import saticoy_theme from './themes/saticoy';


function App() {
    const [is_dark_mode, set_dark_mode] = useState(false);

    const toggle_theme = () => set_dark_mode(!is_dark_mode);

    return (
        <ConfigProvider theme={is_dark_mode ? saticoy_theme.dark.antd : saticoy_theme.light.antd}>
            <LoginPage toggle_theme={toggle_theme} />
        </ConfigProvider>
    );
}

export default App;