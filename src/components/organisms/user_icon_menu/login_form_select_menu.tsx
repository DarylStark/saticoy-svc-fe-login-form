import SelectableItemMenu, { SelectableItemMenuItemProp } from '../../../saticoy-ui/components/molecule/selectable_item_menu/selectable_item_menu';
import UserSelectableItemMenu from '../../../saticoy-ui/components/molecule/user_icon_menu/user_selectable_item_menu';
import { FaRegUser } from "react-icons/fa";

interface LoginFormSelectMenuProps {
    onChange?: (new_value: string | string[]) => void,
    items: SelectableItemMenuItemProp[],
    defaultValue: string
}

function LoginFormSelectMenu(props: LoginFormSelectMenuProps) {
    return (
        <UserSelectableItemMenu icon={<FaRegUser />}>
            <SelectableItemMenu
                defaultValue={props.defaultValue}
                value={props.defaultValue}
                onChange={props.onChange}
                items={props.items}
            />
        </UserSelectableItemMenu>
    )
}

export default LoginFormSelectMenu;