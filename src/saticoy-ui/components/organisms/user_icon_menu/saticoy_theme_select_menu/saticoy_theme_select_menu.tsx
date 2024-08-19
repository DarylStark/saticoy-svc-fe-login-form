import { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeSelectMenu from '../../../molecule/user_icon_menu/theme_select_menu/theme_select_menu';
import { ThemeMode } from '../../../../../saticoy-core/theme-controller/theme';
import SaticoyUIContext from '../../../../context';

function SaticoyThemeSelectMenu() {
    const { t } = useTranslation();
    const context = useContext(SaticoyUIContext);

    const { themeController } = context;

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
    const [selectedTheme, setSelectedTheme] = useState(getSelectedTheme());

    // Update the theme mode when the theme changes
    themeController.eventBus?.on('mode_changed', () => {
        setSelectedMode(getSelectedThemeMode());
        setSelectedTheme(getSelectedTheme());
    });

    themeController.eventBus?.on('theme_changed', () => {
        setSelectedMode(getSelectedThemeMode());
        setSelectedTheme(getSelectedTheme());
    });

    // The component
    return <ThemeSelectMenu
        themes={getThemes()}
        selectedMode={selectedMode}
        selectedTheme={selectedTheme}
        onChangeMode={updateMode}
        onChangeTheme={updateTheme}
        stringAutomaticMode={t('theming.automatic_mode')}
        stringDefaultTheme={t('theming.default_theme')}
        stringDarkMode={t('theming.dark_mode')}
        stringLightMode={t('theming.light_mode')}
    />
}

export default SaticoyThemeSelectMenu