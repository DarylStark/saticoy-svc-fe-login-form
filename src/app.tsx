// React imports
import { useState } from 'react';

// Styling
import { ConfigProvider } from 'antd';
import './index.scss'

// Organism
import LoginPage from './components/templates/login_page';

function App() {
    return (
        <ConfigProvider>
            <LoginPage />
        </ ConfigProvider>
    );
}

export default App;