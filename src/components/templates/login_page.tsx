import './login_page.scss'
import Header from '../organisms/header'
import LoginForm from '../organisms/login_form'
import ThemeController from '../../../theme-controller/theme-controller';

interface LayoutProps {
    themeController?: ThemeController;
}

// Component
function Layout(props: LayoutProps) {
    return (
        <div id='layout'>
            <Header showSettings themeController={props.themeController} />
            <main>
                <LoginForm />
            </main>
        </div>
    )
}

export default Layout
