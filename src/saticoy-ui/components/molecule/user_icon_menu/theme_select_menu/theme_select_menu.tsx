import { ReactElement } from 'react';
import { MenuDivider } from '@chakra-ui/react'
import { MdBrightness4 } from "react-icons/md";
import { MdBrightness5 } from "react-icons/md";
import { MdBrightnessAuto } from "react-icons/md";
import UserSelectableItemMenu from '../user_selectable_item_menu';
import SelectableItemMenu, { SelectableItemMenuItemProp } from '../../selectable_item_menu/selectable_item_menu';

interface ThemeSelectMenuProps {
    themes: SelectableItemMenuItemProp[]
    selectedTheme: string
    selectedMode: 'dark' | 'light' | 'auto'
    modeSelectorEnabled?: boolean
    showModeSelector?: boolean
    showThemeSelector?: boolean
    onChangeMode?: (new_mode: string) => void
    onChangeTheme?: (new_mode: string) => void
    stringAutomaticMode: string,
    stringDarkMode: string,
    stringLightMode: string,
    stringDefaultTheme: string,
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

    return (
        <UserSelectableItemMenu icon={buttonIcons[props.selectedMode]}>
            {showModeSelector && (<>
                <SelectableItemMenu
                    defaultValue={props.selectedMode}
                    value={props.selectedMode}
                    onChange={onChangeMode}
                    items={[
                        { value: 'auto', name: props.stringAutomaticMode, isDiabled: !modeSelectorEnabled },
                        { value: 'dark', name: props.stringDarkMode, isDiabled: !modeSelectorEnabled },
                        { value: 'light', name: props.stringLightMode, isDiabled: !modeSelectorEnabled },
                    ]} />
            </>
            )}
            {showModeSelector && showThemeSelector && (
                <MenuDivider />
            )}
            {showThemeSelector && (
                <SelectableItemMenu
                    defaultValue={props.selectedTheme}
                    value={props.selectedTheme}
                    onChange={onChangeTheme}
                    items={[
                        { value: 'auto', name: props.stringDefaultTheme },
                        ...props.themes
                    ]} />
            )}
        </UserSelectableItemMenu>
    )
}

export type { ThemeSelectMenuProps };
export default ThemeSelectMenu;