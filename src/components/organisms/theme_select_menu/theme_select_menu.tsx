import { ReactElement, useState } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuDivider,
    IconButton,
    MenuOptionGroup,
    MenuItemOption, Box
} from '@chakra-ui/react'

import { MdBrightness4 } from "react-icons/md";
import { MdBrightness5 } from "react-icons/md";
import { MdBrightnessAuto } from "react-icons/md";

import SelectableItemMenu from '../../molecule/selectable_item_menu';

import ThemeController from '../../../theme-controller/theme-controller';
import { ThemeMode } from '../../../theme-controller/theme';
import { IconType } from 'react-icons/lib';

interface ThemeSelectMenuProps {
    themeController: ThemeController;
}

// TODO: Cleanup
// TODO: Make sure the `dark` and `light` modes are disabled when a theme is
//       selected that has only one mode
// TODO: Make the Icon for the button bigger
// TODO: Make this work with Storybook

function ThemeSelectMenu(props: ThemeSelectMenuProps) {
    // State for the icon for the current mode
    const [modeIcon, setModeIcon] = useState<ReactElement>(<MdBrightnessAuto />);

    // onClick items
    const changeMode = (new_mode: string | string[]) => {
        if (Array.isArray(new_mode))
            return;

        // Update the button icon
        const buttonIcons: { [key: string]: ReactElement } = {
            auto: <MdBrightnessAuto />,
            dark: <MdBrightness4 />,
            light: <MdBrightness5 />
        };
        setModeIcon(buttonIcons[new_mode]);

        // Configure the ThemeController
        if (new_mode === 'auto')
            props.themeController.isAutoMode = true;
        else if (new_mode === 'dark')
            props.themeController.selectedMode = ThemeMode.Dark;
        else if (new_mode === 'light')
            props.themeController.selectedMode = ThemeMode.Light;
    }

    const changeTheme = (new_theme: string | string[]) => {
        if (new_theme === '__default') {
            props.themeController.isAutoTheme = true;
            return;
        }

        if (!Array.isArray(new_theme)) {
            props.themeController.selectedTheme = new_theme;
        }
    }
    const getSelectedTheme = (): string => {
        if (props.themeController.isAutoTheme)
            return '__default';
        return props.themeController.selectedTheme || '';
    }

    const getSelectedMode = (): string => {
        if (props.themeController.isAutoMode)
            return 'auto';
        if (props.themeController.selectedMode === ThemeMode.Dark)
            return 'dark';
        return 'light';
    }

    // The component
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={modeIcon}
                variant='none'
                size='lg'
            />
            <MenuList>
                <MenuOptionGroup defaultValue={getSelectedMode()} type='radio' onChange={changeMode}>
                    <MenuItemOption value='auto' >Automatic mode</MenuItemOption>
                    <MenuItemOption value='dark' >Dark mode</MenuItemOption>
                    <MenuItemOption value='light'>Light mode</MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider />
                <SelectableItemMenu
                    defaultValue={getSelectedTheme()}
                    onChange={changeTheme}
                    items={[
                        { value: '__default', name: 'Default theme' },
                        { value: 'Saticoy', name: 'Saticoy' },
                        { value: 'Ugly', name: 'Ugly' },
                    ]} />
            </MenuList>
        </Menu>
    );
}

export default ThemeSelectMenu;