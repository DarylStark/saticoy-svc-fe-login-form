import { ReactElement, useState } from 'react';
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

import SelectableItemMenu from '../../molecule/selectable_item_menu';

import ThemeController from '../../../theme-controller/theme-controller';
import { ThemeMode } from '../../../theme-controller/theme';

interface ThemeSelectMenuProps {
    themeController: ThemeController
}

// TODO: Make the Icon for the button bigger
// TODO: Make this work with Storybook

const buttonIcons: { [key: string]: ReactElement } = {
    auto: <MdBrightnessAuto />,
    dark: <MdBrightness4 />,
    light: <MdBrightness5 />
};

function ThemeSelectMenu(props: ThemeSelectMenuProps) {
    // State for the icon for the current mode
    const [modeIcon, setModeIcon] = useState<ReactElement>(<MdBrightnessAuto />);

    // State from themeController
    const [modeSwitchingEnabled, setModeSwitchingEnabled] = useState(props.themeController.hasBothStyles());
    const [selectedMode, setSelectedMode] = useState(props.themeController.selectedMode);
    const [selectedTheme, setSelectedTheme] = useState(props.themeController.selectedTheme);

    const updateState = () => {
        setModeSwitchingEnabled(props.themeController.hasBothStyles());
        setSelectedMode(props.themeController.selectedMode);
        setSelectedTheme(props.themeController.selectedTheme);
        setModeIcon(buttonIcons[selectedMode === ThemeMode.Dark ? 'dark' : 'light']);
    }

    props.themeController.eventBus?.on('theme_changed', updateState);

    // onClick items
    const changeMode = (new_mode: string | string[]) => {
        if (Array.isArray(new_mode))
            return;

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

    // Retrievers for values
    const getSelectedMode = (): string => {
        if (props.themeController.isAutoMode)
            return 'auto';
        if (selectedMode === ThemeMode.Dark)
            return 'dark';
        return 'light';
    }

    const getSelectedTheme = (): string => {
        if (props.themeController.isAutoTheme)
            return '__default';
        return selectedTheme || '';
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
                    <MenuItemOption value='auto' isDisabled={!modeSwitchingEnabled}>Automatic mode</MenuItemOption>
                    <MenuItemOption value='dark' isDisabled={!modeSwitchingEnabled}>Dark mode</MenuItemOption>
                    <MenuItemOption value='light' isDisabled={!modeSwitchingEnabled}>Light mode</MenuItemOption>
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