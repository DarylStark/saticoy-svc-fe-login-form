import ThemeSelectMenu, { ThemeSelectMenuProps } from "./theme_select_menu";
import themeController from "./test_data";

// Default component
export default {
    title: 'Organisms/ThemeSelectMenu',
    component: ThemeSelectMenu,
};

const Template = (props: ThemeSelectMenuProps) => <ThemeSelectMenu {...props} />;

export const Default = Template.bind({});
Default.args = {
    themeController: themeController
}

export const DefaultWithoutModeSelector = Template.bind({});
DefaultWithoutModeSelector.args = {
    themeController: themeController,
    showModeSelector: false
}

export const DefaultWithoutThemeSelector = Template.bind({});
DefaultWithoutThemeSelector.args = {
    themeController: themeController,
    showModeSelector: true,
    showThemeSelector: false
}
