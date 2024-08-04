import {
    Menu,
    MenuButton,
    MenuList,
    IconButton,
} from '@chakra-ui/react'
import SelectableItemMenu, { SelectableItemMenuItemProp } from '../../molecule/selectable_item_menu/selectable_item_menu';
import { FaRegUser } from "react-icons/fa";

interface LoginFormSelectMenuProps {
    onChange?: (new_value: string | string[]) => void;
}

function LoginFormSelectMenu(props: LoginFormSelectMenuProps) {
    // Retrievers for values
    const availableLoginMethods = (): SelectableItemMenuItemProp[] => {
        return [
            {
                value: '1',
                name: 'Username and password'
            },
            {
                value: '4',
                name: 'Authorize from logged in session'
            },
            {
                value: '3',
                name: 'Magic code in email'
            },
        ]
    }

    // The component
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
                    defaultValue='1'
                    onChange={props.onChange}
                    items={availableLoginMethods()}
                />
            </MenuList>
        </Menu>
    );
}

export default LoginFormSelectMenu;