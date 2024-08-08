import ThemeSelectMenu, { ThemeSelectMenuProps } from "./theme_select_menu";
import themeController from "./test_data";
import { StoryFn } from "@storybook/react";

// Default component
export default {
    title: 'Organisms/Menus/ThemeSelectMenu',
    component: ThemeSelectMenu,
};

const Template = (props: ThemeSelectMenuProps) => <ThemeSelectMenu {...props} />;

export const Default: StoryFn<ThemeSelectMenuProps> = Template.bind({});
Default.args = {
    themeController: themeController
}

export const DefaultWithoutModeSelector: StoryFn<ThemeSelectMenuProps> = Template.bind({});
DefaultWithoutModeSelector.args = {
    themeController: themeController,
    showModeSelector: false
}

export const DefaultWithoutThemeSelector: StoryFn<ThemeSelectMenuProps> = Template.bind({});
DefaultWithoutThemeSelector.args = {
    themeController: themeController,
    showModeSelector: true,
    showThemeSelector: false,
}
