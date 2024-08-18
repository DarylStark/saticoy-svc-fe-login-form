// Saticoy UI main component
import SaticoyUI from '../../../saticoy-ui/components/saticoy-ui';

// Template
import LoginPageTemplate from '../../templates/login_page_template';

// Translation
import { useTranslation } from 'react-i18next';

// Styling
import { themeController } from '../../../saticoy-ui/globals/theme';
import { i18nController } from '../../../saticoy-ui/globals/i18n';

function LoginPage() {
    const { t } = useTranslation();

    return (
        <SaticoyUI pageTitle={t('login_page.title')}>
            <LoginPageTemplate
                themeController={themeController}
                i18nController={i18nController}
            />
        </SaticoyUI>
    );
}

export default LoginPage;