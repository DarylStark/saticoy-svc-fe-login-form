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

function ThemeSelectMenu({
    themeController,
    showModeSelector = true,
    showThemeSelector = true
}: ThemeSelectMenuProps) {
    const { t } = useTranslation();

    // Retrievers for values
    const availableThemes = (): SelectableItemMenuItemProp[] => {
        const themes = themeController.themeRepository.getNames(false).map((name: string) => {
            return { value: name, name: name }
        });
        return [
            { value: '__default', name: t('theming.default_theme') },
            ...themes
        ]
    }

    const getSelectedMode = (): string => {
        if (themeController.isAutoMode)
            return 'auto';
        if (themeController.selectedMode === ThemeMode.Dark)
            return 'dark';
        return 'light';
    }

    const getSelectedTheme = (): string => {
        if (themeController.isAutoTheme)
            return '__default';
        return themeController.selectedTheme || '';
    }

    // State for the icon for the current mode
    const [modeIcon, setModeIcon] = useState<ReactElement>(buttonIcons[getSelectedMode()]);

    // State from themeController
    const [modeSwitchingEnabled, setModeSwitchingEnabled] = useState(themeController.hasBothStyles());

    const updateButtonIcon = () => {
        setModeIcon(buttonIcons[getSelectedMode()]);
    };

    const updateState = () => {
        setModeSwitchingEnabled(themeController.hasBothStyles());
        updateButtonIcon();
    }

    themeController.eventBus?.on('theme_changed', updateState);

    // onClick items
    const changeMode = (new_mode: string | string[]) => {
        if (Array.isArray(new_mode))
            return;

        // Configure the ThemeController
        if (new_mode === 'auto')
            themeController.isAutoMode = true;
        else if (new_mode === 'dark')
            themeController.selectedMode = ThemeMode.Dark;
        else if (new_mode === 'light')
            themeController.selectedMode = ThemeMode.Light;
    }

    const changeTheme = (new_theme: string | string[]) => {
        if (new_theme === '__default') {
            themeController.isAutoTheme = true;
            return;
        }

        if (!Array.isArray(new_theme)) {
            themeController.selectedTheme = new_theme;
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
                {showModeSelector && (
                    <>
                        <MenuOptionGroup defaultValue={getSelectedMode()} type='radio' onChange={changeMode}>
                            <MenuItemOption value='auto' isDisabled={!modeSwitchingEnabled}>{t('theming.automatic_mode')}</MenuItemOption>
                            <MenuItemOption value='dark' isDisabled={!modeSwitchingEnabled}>{t('theming.dark_mode')}</MenuItemOption>
                            <MenuItemOption value='light' isDisabled={!modeSwitchingEnabled}>{t('theming.light_mode')}</MenuItemOption>
                        </MenuOptionGroup>
                    </>)}
                {showModeSelector && showThemeSelector && (
                    <MenuDivider />
                )}
                {showThemeSelector && (
                    <SelectableItemMenu
                        defaultValue={getSelectedTheme()}
                        onChange={changeTheme}
                        items={availableThemes()} />
                )}
            </MenuList>
        </Menu>
    );
}

export type { ThemeSelectMenuProps };
export default ThemeSelectMenu;