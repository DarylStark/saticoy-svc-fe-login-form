// Saticoy UI main component
import SaticoyUI from '@saticoy/ui';

// Template
import LoginPageTemplate from '../templates/login-page-template';

// Translation
import { useTranslation } from 'react-i18next';

function LoginPage() {
    const { t } = useTranslation();

    return (
        <SaticoyUI pageTitle={t('login_page.title')}>
            <LoginPageTemplate />
        </SaticoyUI>
    );
}

export default LoginPage;
