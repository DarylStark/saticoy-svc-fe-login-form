import SaticoyThemeSelectMenu from "./saticoy-theme-select-menu";
import { StoryFn } from "@storybook/react";

export default {
    title: 'Organisms/UserIconMenu/SaticoyThemeSelectMenu',
    component: SaticoyThemeSelectMenu,
};

const Template = () => <SaticoyThemeSelectMenu />;

export const Default: StoryFn = Template.bind({});
