import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeController from "../../../../../saticoy-core/theme-controller/theme-controller";
import SaticoyChakraStyle from "../../../../themes/saticoy-style"
import ThemeSelectMenu from '../../../molecule/user_icon_menu/theme_select_menu/theme_select_menu';
import { ThemeMode } from '../../../../../saticoy-core/theme-controller/theme';

interface SaticoyThemeSelectMenuProps {
    themeController: ThemeController<SaticoyChakraStyle>
}

function SaticoyThemeSelectMenu(props: SaticoyThemeSelectMenuProps) {
    const { t } = useTranslation();
    const { themeController } = props;

    function getSelectedThemeMode(): 'dark' | 'light' | 'auto' {
        if (themeController.isAutoMode) return 'auto';
        return themeController.selectedMode || 'auto';
    }

    function getSelectedTheme(): string {
        if (themeController.isAutoTheme) return 'auto';
        return themeController.selectedTheme || 'auto';
    }

    function getThemes() {
        const themes = themeController.themeRepository.getNames(true);
        return themes.map(t => ({ 'name': t, value: t }));
    }

    // Update the mode when the mode changes
    const updateMode = (mode: string) => {
        if (mode === 'auto')
            return themeController.isAutoMode = true;
        themeController.selectedMode = mode === 'dark' ? ThemeMode.Dark : ThemeMode.Light;
    }

    // Update the theme when the theme changes
    const updateTheme = (theme: string) => {
        if (theme === 'auto')
            return themeController.isAutoTheme = true;
        themeController.selectedTheme = theme
    }

    // State for theming
    const [selectedMode, setSelectedMode] = useState(getSelectedThemeMode());

    // Update the theme mode when the theme changes
    themeController.eventBus?.on('theme_changed', () => {
        setSelectedMode(getSelectedThemeMode());
    });

    // The component
    return <ThemeSelectMenu
        themes={getThemes()}
        selectedMode={selectedMode}
        selectedTheme={getSelectedTheme()}
        onChangeMode={updateMode}
        onChangeTheme={updateTheme}
        stringAutomaticMode={t('theming.automatic_mode')}
        stringDefaultTheme={t('theming.default_theme')}
        stringDarkMode={t('theming.dark_mode')}
        stringLightMode={t('theming.light_mode')}
    />
}

export default SaticoyThemeSelectMenu
export type { SaticoyThemeSelectMenuProps }