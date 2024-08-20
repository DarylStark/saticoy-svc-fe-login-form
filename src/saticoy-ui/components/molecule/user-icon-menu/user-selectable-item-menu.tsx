import React from 'react';

import {
    Menu,
    MenuButton,
    MenuList,
    IconButton
} from '@chakra-ui/react'

interface UserSelectableItemMenuProps {
    children: React.ReactNode
    icon: React.ReactElement
}

function UserSelectableItemMenu(props: UserSelectableItemMenuProps) {
    // The component
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={props.icon}
                variant='none'
                size='lg'
                fontSize={24}
            />
            <MenuList>
                {props.children}
            </MenuList>
        </Menu>
    );
}

export default UserSelectableItemMenu
export type { UserSelectableItemMenuProps }