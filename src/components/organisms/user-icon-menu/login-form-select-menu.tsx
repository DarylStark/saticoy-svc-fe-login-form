import SelectableItemMenu, { SelectableItemMenuItemProp } from '../../../saticoy-ui/components/molecule/selectable-item-menu/selectable-item-menu';
import UserSelectableItemMenu from '../../../saticoy-ui/components/molecule/user-icon-menu/user-selectable-item-menu';
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