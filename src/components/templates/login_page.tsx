import './login_page.scss'
import Header from '../molecule/header/header'
import LoginFormCard, { LoginFormType } from '../organisms/login_form_card/login_form_card'
import ThemeController from '../../theme-controller/theme-controller';
import I18nController from '../../internationalization/i18n-controller';
import { useTranslation } from 'react-i18next';
import LoginFormTypeSelectMenu from '../organisms/login_form_select_menu/login_form_select_menu';
import { useState } from 'react';
import { SelectableItemMenuItemProp } from '../molecule/selectable_item_menu/selectable_item_menu';

// List with available forms
const primaryForms: SelectableItemMenuItemProp[] = [
    {
        value: LoginFormType.UsernameAndPassword,
        name: 'Username and password'
    },
    {
        value: LoginFormType.AuthorizeFromSession,
        name: 'Authorize from logged in session'
    },
    {
        value: LoginFormType.MagicCode,
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
    const [selectedForm, setSelectedForm] = useState(LoginFormType.UsernameAndPassword);

    const setForm = (new_value: string | string[]) => {
        setSelectedForm(new_value as LoginFormType);
    }

    return (
        <div id='layout'>
            <Header
                themeController={props.themeController}
                localeController={props.localeController}
                extraMenus={
                    <LoginFormTypeSelectMenu
                        defaultValue={primaryForms[0].value}
                        onChange={setForm}
                        items={primaryForms} />
                }
            />
            <main>
                <LoginFormCard
                    form_type={selectedForm}
                    text={t('login_form.tagline')} />
            </main>
        </div>
    )
}

export default Layout
