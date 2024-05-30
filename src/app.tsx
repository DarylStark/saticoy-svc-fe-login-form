
import { useState } from 'react';
import LoginPage from './components/templates/login_page';

import './index.scss'

function App() {
    const [is_dark_mode, set_dark_mode] = useState(true);

    const toggle_theme = () => set_dark_mode(!is_dark_mode);

    return (
        <LoginPage toggle_theme={toggle_theme} />
    );
}

export default App;