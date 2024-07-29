import './login_page.scss'
import Header from '../molecule/header/header'
import LoginForm from '../organisms/forms/login_form'
import ThemeController from '../../theme-controller/theme-controller';
import I18nController from '../../internationalization/i18n-controller';

interface LayoutProps {
    themeController?: ThemeController
    localeController?: I18nController
}

// Component
function Layout(props: LayoutProps) {
    return (
        <div id='layout'>
            <Header
                themeController={props.themeController}
                localeController={props.localeController}
            />
            <main>
                <LoginForm />
            </main>
        </div>
    )
}

export default Layout
