import LoginFormSelectMenu from "./login_form_select_menu";
import { SelectableItemMenuItemProp } from "../../../saticoy-ui/components/molecule/selectable_item_menu/selectable_item_menu";
import { LoginFormType } from "../login_form_card/login_form_card";

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