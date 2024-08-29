import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './components/pages/login-page';
import en_US from './locales/en-US';
import nl_NL from './locales/nl-NL';

// Import to extend the language
import { extendLanguage } from '@saticoy/ui';

// Import fonts. We need to do this to make sure the fonts are loaded before
// the app is rendered.
import 'typeface-roboto-slab/index.css';
import 'typeface-inter/inter.css';

// Extend the languages
extendLanguage('en-US', en_US);
extendLanguage('nl-NL', nl_NL);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <LoginPage />
    </React.StrictMode>,
);
