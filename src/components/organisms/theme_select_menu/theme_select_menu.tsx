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
import { useTranslation } from 'react-i18next';

import { MdBrightness4 } from "react-icons/md";
import { MdBrightness5 } from "react-icons/md";
import { MdBrightnessAuto } from "react-icons/md";

import SelectableItemMenu from '../../molecule/selectable_item_menu/selectable_item_menu';

import ThemeController from '../../../theme-controller/theme-controller';
import { ThemeMode } from '../../../theme-controller/theme';

import { SelectableItemMenuItemProp } from '../../molecule/selectable_item_menu/selectable_item_menu';

interface ThemeSelectMenuProps {
    themeController: ThemeController,
    showModeSelector?: boolean,
    showThemeSelector?: boolean
}

const buttonIcons: { [key: string]: ReactElement } = {
    auto: <MdBrightnessAuto />,
    dark: <MdBrightness4 />,
    light: <MdBrightness5 />
};

function ThemeSelectMenu(props: ThemeSelectMenuProps) {
    const { t } = useTranslation();

    // Retrievers for values
    const availableThemes = (): SelectableItemMenuItemProp[] => {
        const themes = props.themeController.themeRepository.getNames(false).map((name: string) => {
            return { value: name, name: name }
        });
        return [
            { value: '__default', name: t('theming.default_theme') },
            ...themes
        ]
    }

    const getSelectedMode = (): string => {
        if (props.themeController.isAutoMode)
            return 'auto';
        if (props.themeController.selectedMode === ThemeMode.Dark)
            return 'dark';
        return 'light';
    }

    const getSelectedTheme = (): string => {
        if (props.themeController.isAutoTheme)
            return '__default';
        return props.themeController.selectedTheme || '';
    }

    // State for the icon for the current mode
    const [modeIcon, setModeIcon] = useState<ReactElement>(buttonIcons[getSelectedMode()]);

    // State from themeController
    const [modeSwitchingEnabled, setModeSwitchingEnabled] = useState(props.themeController.hasBothStyles());

    const updateButtonIcon = () => {
        setModeIcon(buttonIcons[getSelectedMode()]);
    };

    const updateState = () => {
        setModeSwitchingEnabled(props.themeController.hasBothStyles());
        updateButtonIcon();
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

    // The component
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={modeIcon}
                variant='none'
                size='lg'
                fontSize={24}
            />
            <MenuList>
                {props.showModeSelector && (
                    <>
                        <MenuOptionGroup defaultValue={getSelectedMode()} type='radio' onChange={changeMode}>
                            <MenuItemOption value='auto' isDisabled={!modeSwitchingEnabled}>{t('theming.automatic_mode')}</MenuItemOption>
                            <MenuItemOption value='dark' isDisabled={!modeSwitchingEnabled}>{t('theming.dark_mode')}</MenuItemOption>
                            <MenuItemOption value='light' isDisabled={!modeSwitchingEnabled}>{t('theming.light_mode')}</MenuItemOption>
                        </MenuOptionGroup>
                    </>)}
                {props.showModeSelector && props.showThemeSelector && (
                    <MenuDivider />
                )}
                {props.showThemeSelector && (
                    <>
                        <SelectableItemMenu
                            defaultValue={getSelectedTheme()}
                            onChange={changeTheme}
                            items={availableThemes()} />
                    </>
                )}
            </MenuList>
        </Menu>
    );
}

// Set default props
ThemeSelectMenu.defaultProps = {
    showModeSelector: true,
    showThemeSelector: true
};

export type { ThemeSelectMenuProps };
export default ThemeSelectMenu;