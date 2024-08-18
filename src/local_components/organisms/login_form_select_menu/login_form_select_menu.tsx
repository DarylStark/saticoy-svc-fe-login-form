import SelectableItemMenu, { SelectableItemMenuItemProp } from '../../../saticoy-ui/components/molecule/selectable_item_menu/selectable_item_menu';
import UserIconMenu from '../../../saticoy-ui/components/molecule/user_icon_menu/user_icon_menu';
import { FaRegUser } from "react-icons/fa";

interface LoginFormSelectMenuProps {
    onChange?: (new_value: string | string[]) => void,
    items: SelectableItemMenuItemProp[],
    defaultValue: string
}

function LoginFormSelectMenu(props: LoginFormSelectMenuProps) {
    return (
        <UserIconMenu icon={<FaRegUser />}>
            <SelectableItemMenu
                defaultValue={props.defaultValue}
                onChange={props.onChange}
                items={props.items}
            />
        </UserIconMenu>
    )
}

export default LoginFormSelectMenu;