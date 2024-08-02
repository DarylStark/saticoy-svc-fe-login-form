import './login_page.scss'
import Header from '../molecule/header/header'
import LoginForm from '../organisms/login_form/login_form'
import ThemeController from '../../theme-controller/theme-controller';
import I18nController from '../../internationalization/i18n-controller';
import { useTranslation } from 'react-i18next';

interface LayoutProps {
    themeController?: ThemeController
    localeController?: I18nController
}

// Component
function Layout(props: LayoutProps) {
    const { t } = useTranslation();

    return (
        <div id='layout'>
            <Header
                themeController={props.themeController}
                localeController={props.localeController}
            />
            <main>
                <LoginForm
                    text={t('login_form.tagline')} />
            </main>
        </div>
    )
}

export default Layout
