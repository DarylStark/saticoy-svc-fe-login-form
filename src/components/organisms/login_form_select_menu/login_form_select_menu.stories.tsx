import LoginFormSelectMenu from "./login_form_select_menu";
import { SelectableItemMenuItemProp } from '../../molecule/selectable_item_menu/selectable_item_menu';
import { LoginForm } from "../login_form_dialog/login_form_dialog";

const exampleForm: SelectableItemMenuItemProp[] = [
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

// Default component
export default {
    title: 'Organisms/Menus/LoginFormSelectMenu',
    component: LoginFormSelectMenu,
};

const Template = () => <LoginFormSelectMenu items={exampleForm} defaultValue={LoginForm.UsernameAndPassword} />;

export const Default = Template.bind({});