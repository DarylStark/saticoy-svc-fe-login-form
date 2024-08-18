import SaticoyLocaleSelectMenu, { SaticoyLocaleSelectMenuProps } from "./saticoy_locale_select_menu";
import { StoryFn } from "@storybook/react";
import { i18nController } from "../../../../../saticoy-ui/globals/i18n";

export default {
    title: 'Organisms/UserIconMenus/SaticoyLocaleSelectMenu',
    component: SaticoyLocaleSelectMenu,
};

const Template = () => <SaticoyLocaleSelectMenu i18nController={i18nController} />;

export const Default: StoryFn<SaticoyLocaleSelectMenuProps> = Template.bind({});
