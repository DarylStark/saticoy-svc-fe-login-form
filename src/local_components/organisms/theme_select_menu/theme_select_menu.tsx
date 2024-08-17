import { ReactElement } from 'react';
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
import SelectableItemMenu, { SelectableItemMenuItemProp } from '../../../components/molecules/selectable_item_menu/selectable_item_menu';

interface ThemeSelectMenuProps {
    themes: SelectableItemMenuItemProp[]
    selectedTheme: string
    selectedMode: 'dark' | 'light' | 'auto'
    modeSelectorEnabled?: boolean
    showModeSelector?: boolean
    showThemeSelector?: boolean
    onChangeMode?: (new_mode: string) => void
    onChangeTheme?: (new_mode: string) => void
}

const buttonIcons: { [key: string]: ReactElement } = {
    auto: <MdBrightnessAuto />,
    dark: <MdBrightness4 />,
    light: <MdBrightness5 />
};

function ThemeSelectMenu({
    modeSelectorEnabled = true,
    showModeSelector = true,
    showThemeSelector = true,
    ...props
}: ThemeSelectMenuProps) {
    const { t } = useTranslation();

    // Callbacks for the changes
    const onChangeMode = (new_mode: string | string[]) => {
        if (Array.isArray(new_mode))
            return props.onChangeMode?.(new_mode[0]);
        return props.onChangeMode?.(new_mode);
    };

    const onChangeTheme = (new_mode: string | string[]) => {
        if (Array.isArray(new_mode))
            return props.onChangeTheme?.(new_mode[0]);
        return props.onChangeTheme?.(new_mode);
    };

    // The component
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={buttonIcons[props.selectedMode]}
                variant='none'
                size='lg'
                fontSize={24}
            />
            <MenuList>
                {showModeSelector && (
                    <>
                        <MenuOptionGroup
                            defaultValue={props.selectedMode}
                            type='radio'
                            onChange={onChangeMode}>
                            <MenuItemOption value='auto' isDisabled={!modeSelectorEnabled}>{t('theming.automatic_mode')}</MenuItemOption>
                            <MenuItemOption value='dark' isDisabled={!modeSelectorEnabled}>{t('theming.dark_mode')}</MenuItemOption>
                            <MenuItemOption value='light' isDisabled={!modeSelectorEnabled}>{t('theming.light_mode')}</MenuItemOption>
                        </MenuOptionGroup>
                    </>)}
                {showModeSelector && showThemeSelector && (
                    <MenuDivider />
                )}
                {showThemeSelector && (
                    <SelectableItemMenu
                        defaultValue={props.selectedTheme}
                        onChange={onChangeTheme}
                        items={[
                            { value: 'auto', name: t('theming.default_theme') },
                            ...props.themes
                        ]} />
                )}
            </MenuList>
        </Menu>
    );
}

export type { ThemeSelectMenuProps };
export default ThemeSelectMenu;