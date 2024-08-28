import LoginFormSelectMenu from "./login-form-select-menu";
import { SelectableItemMenuItemProp } from '@saticoy/ui';
import { LoginFormType } from "../login-form-card/login-form-card";

const exampleForm: SelectableItemMenuItemProp[] = [
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

// Default component
export default {
    title: 'Organisms/UserIconMenu/LoginFormSelectMenu',
    component: LoginFormSelectMenu,
};

const Template = () => <LoginFormSelectMenu
    items={exampleForm}
    defaultValue={LoginFormType.UsernameAndPassword} />;

export const Default = Template.bind({});