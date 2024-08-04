import './login_page.scss'
import Header from '../molecule/header/header'
import LoginFormDialog, { LoginForm } from '../organisms/login_form/login_form_dialog'
import ThemeController from '../../theme-controller/theme-controller';
import I18nController from '../../internationalization/i18n-controller';
import { useTranslation } from 'react-i18next';
import LoginFormSelectMenu from '../organisms/login_form_select_menu/login_form_select_menu';
import { useState } from 'react';
import { SelectableItemMenuItemProp } from '../molecule/selectable_item_menu/selectable_item_menu';

// List with available forms
const primaryForms: SelectableItemMenuItemProp[] = [
    {
        value: LoginForm.UsernameAndPassword,
        name: 'Username and password'
    },
    {
        value: LoginForm.AuthorizeFromSession,
        name: 'Authorize from logged in session'
    },
    {
        value: LoginForm.MagicCode,
        name: 'Magic code in email'
    },
]

interface LayoutProps {
    themeController?: ThemeController
    localeController?: I18nController
}

// Component
function Layout(props: LayoutProps) {
    const { t } = useTranslation();
    const [selectedForm, setSelectedForm] = useState(LoginForm.UsernameAndPassword);

    const setForm = (new_value: string | string[]) => {
        setSelectedForm(new_value as LoginForm);
    }

    return (
        <div id='layout'>
            <Header
                themeController={props.themeController}
                localeController={props.localeController}
                extraMenus={
                    <LoginFormSelectMenu
                        defaultValue={primaryForms[0].value}
                        onChange={setForm}
                        items={primaryForms} />
                }
            />
            <main>
                <LoginFormDialog
                    form={selectedForm}
                    text={t('login_form.tagline')} />
            </main>
        </div>
    )
}

export default Layout
