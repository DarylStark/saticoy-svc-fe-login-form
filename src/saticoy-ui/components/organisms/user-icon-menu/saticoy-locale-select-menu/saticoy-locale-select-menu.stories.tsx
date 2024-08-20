import SaticoyLocaleSelectMenu from "./saticoy-locale-select-menu";
import { StoryFn } from "@storybook/react";

export default {
    title: 'Organisms/UserIconMenu/SaticoyLocaleSelectMenu',
    component: SaticoyLocaleSelectMenu,
};

const Template = () => <SaticoyLocaleSelectMenu />;

export const Default: StoryFn = Template.bind({});
