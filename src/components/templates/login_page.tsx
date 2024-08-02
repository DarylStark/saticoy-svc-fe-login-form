import './login_page.scss'
import Header from '../molecule/header/header'
import LoginForm from '../organisms/login_form/login_form'
import ThemeController from '../../theme-controller/theme-controller';
import I18nController from '../../internationalization/i18n-controller';
import { useTranslation } from 'react-i18next';
import LoginFormSelectMenu from '../organisms/login_form_select_menu/login_form_select_menu';
import { useState } from 'react';

interface LayoutProps {
    themeController?: ThemeController
    localeController?: I18nController
}

// Component
function Layout(props: LayoutProps) {
    const { t } = useTranslation();
    const [selectedForm, setSelectedForm] = useState(1);

    const setForm = (new_value: string | string[]) => {
        setSelectedForm(parseInt(new_value as string));
    }

    return (
        <div id='layout'>
            <Header
                themeController={props.themeController}
                localeController={props.localeController}
                extraMenus={
                    <LoginFormSelectMenu onChange={setForm} />
                }
            />
            <main>
                <LoginForm
                    form={selectedForm}
                    text={t('login_form.tagline')} />
            </main>
        </div>
    )
}

export default Layout
