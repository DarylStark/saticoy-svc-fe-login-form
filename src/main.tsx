import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './components/pages/login-page'
import en_US from './locales/en-US'
import nl_NL from './locales/nl-NL'

import { extendLanguage } from '@saticoy/ui'

extendLanguage('en-US', en_US);
extendLanguage('nl-NL', nl_NL);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
)
