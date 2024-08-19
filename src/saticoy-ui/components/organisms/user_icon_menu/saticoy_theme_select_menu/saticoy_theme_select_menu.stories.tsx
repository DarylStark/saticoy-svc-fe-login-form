import SaticoyThemeSelectMenu from "./saticoy_theme_select_menu";
import { StoryFn } from "@storybook/react";

export default {
    title: 'Organisms/UserIconMenu/SaticoyThemeSelectMenu',
    component: SaticoyThemeSelectMenu,
};

const Template = () => <SaticoyThemeSelectMenu />;

export const Default: StoryFn = Template.bind({});
