
import { useState } from 'react';
import LoginPage from './components/templates/login_page';

import { ConfigProvider } from 'antd';

import light_theme from './saticoy-themes/light';
import dark_theme from './saticoy-themes/dark';

import './index.scss'

function App() {
    const [is_dark_mode, set_dark_mode] = useState(false);

    const toggle_theme = () => set_dark_mode(!is_dark_mode);

    return (
        <ConfigProvider theme={is_dark_mode ? dark_theme : light_theme}>
            <LoginPage toggle_theme={toggle_theme} />
        </ConfigProvider>
    );
}

export default App;