import { useState } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuDivider,
    IconButton,
    MenuOptionGroup,
    MenuItemOption
} from '@chakra-ui/react'

import { MdBrightness4 } from "react-icons/md";
import { MdBrightness5 } from "react-icons/md";
import { MdBrightnessAuto } from "react-icons/md";

function ThemeList() {
    return (
        <MenuOptionGroup defaultValue='auto1' type='radio'>
            <MenuItemOption value='auto1'>Saticoy</MenuItemOption>
            <MenuItemOption value='auto2'>Ugly</MenuItemOption>
        </MenuOptionGroup>
    )
}

function ThemeSelectMenu() {
    // State for the icon for the current mode
    const [modeIcon, setModeIcon] = useState(<MdBrightnessAuto />);

    // onClick items
    const changeMode = (new_mode: string | string[]) => {
        if (new_mode === 'auto') {
            setModeIcon(<MdBrightnessAuto />);
        } else if (new_mode === 'dark') {
            setModeIcon(<MdBrightness4 />);
        } else if (new_mode === 'light') {
            setModeIcon(<MdBrightness5 />);
        }
        console.log(new_mode);
    }

    // The component
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={modeIcon}
                variant='none'
            />
            <MenuList>
                <MenuOptionGroup defaultValue='auto' type='radio' onChange={changeMode}>
                    <MenuItemOption value='auto' icon={<MdBrightnessAuto />}>Automatic mode</MenuItemOption>
                    <MenuItemOption value='dark' icon={<MdBrightness4 />}>Dark mode</MenuItemOption>
                    <MenuItemOption value='light' icon={<MdBrightness5 />}>Light mode</MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider />
                <ThemeList />
            </MenuList>
        </Menu>
    );
}

export default ThemeSelectMenu;