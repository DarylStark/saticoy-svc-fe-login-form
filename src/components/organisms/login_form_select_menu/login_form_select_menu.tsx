import {
    Menu,
    MenuButton,
    MenuList,
    IconButton,
} from '@chakra-ui/react'
import SelectableItemMenu, { SelectableItemMenuItemProp } from '../../molecule/selectable_item_menu/selectable_item_menu';
import { FaRegUser } from "react-icons/fa";

interface LoginFormSelectMenuProps {
    onChange?: (new_value: string | string[]) => void,
    items: SelectableItemMenuItemProp[],
    defaultValue: string
}

function LoginFormSelectMenu(props: LoginFormSelectMenuProps) {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<FaRegUser />}
                variant='none'
                size='lg'
                fontSize={24}
            />
            <MenuList>
                <SelectableItemMenu
                    defaultValue={props.defaultValue}
                    onChange={props.onChange}
                    items={props.items}
                />
            </MenuList>
        </Menu>
    );
}

export default LoginFormSelectMenu;