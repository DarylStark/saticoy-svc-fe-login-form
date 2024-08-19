import SaticoyLocaleSelectMenu from "./saticoy_locale_select_menu";
import { StoryFn } from "@storybook/react";

export default {
    title: 'Organisms/UserIconMenu/SaticoyLocaleSelectMenu',
    component: SaticoyLocaleSelectMenu,
};

const Template = () => <SaticoyLocaleSelectMenu />;

export const Default: StoryFn = Template.bind({});
