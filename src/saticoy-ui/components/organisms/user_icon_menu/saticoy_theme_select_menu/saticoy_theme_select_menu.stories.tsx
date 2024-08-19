import SaticoyThemeSelectMenu, { SaticoyThemeSelectMenuProps } from "./saticoy_theme_select_menu";
import { StoryFn } from "@storybook/react";
import { themeController } from "../../../../globals/theme";

export default {
    title: 'Organisms/UserIconMenu/SaticoyThemeSelectMenu',
    component: SaticoyThemeSelectMenu,
};

const Template = () => <SaticoyThemeSelectMenu themeController={themeController} />;

export const Default: StoryFn<SaticoyThemeSelectMenuProps> = Template.bind({});
