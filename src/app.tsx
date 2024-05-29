import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useState } from 'react';

import dark from './saticoy-themes/dark';
import light from './saticoy-themes/light';

import LoginPage from './components/templates/login_page';

import './index.scss'

function App() {
    const [is_dark_mode, set_dark_mode] = useState(true);

    const toggle_theme = () => set_dark_mode(!is_dark_mode);

    return (
        <ThemeProvider theme={is_dark_mode ? dark : light}>
            <CssBaseline />
            <LoginPage toggle_theme={toggle_theme} />
        </ThemeProvider>
    );
}

export default App;