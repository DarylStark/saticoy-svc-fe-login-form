import SaticoyThemeSelectMenu, { SaticoyThemeSelectMenuProps } from "./saticoy_theme_select_menu";
import { StoryFn } from "@storybook/react";
import { themeController } from "../../../../../saticoy-ui/globals/theme";

export default {
    title: 'Organisms/UserIconMenus/SaticoyThemeSelectMenu',
    component: SaticoyThemeSelectMenu,
};

const Template = () => <SaticoyThemeSelectMenu themeController={themeController} />;

export const Default: StoryFn<SaticoyThemeSelectMenuProps> = Template.bind({});
