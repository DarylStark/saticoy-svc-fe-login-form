// src/components/Button.stories.tsx
import Header, { HeaderProps } from "./header";
import i18nController from "../../organisms/locale_select_menu/test_data";
import themeController from "../../organisms/theme_select_menu/test_data";
import { StoryFn } from "@storybook/react";

export default {
    title: 'Organisms/Layout/Header',
    component: Header,
};

const Template = (props: HeaderProps) => <Header {...props} />;

export const NoMenus: StoryFn<HeaderProps> = Template.bind({});
NoMenus.args = {
    children: 'Header without menus',
};

export const WithThemeMenu: StoryFn<HeaderProps> = Template.bind({});
WithThemeMenu.args = {
    children: 'Header with theme menu',
    themeController: themeController,
};

export const WithLocaleMenu: StoryFn<HeaderProps> = Template.bind({});
WithLocaleMenu.args = {
    children: 'Header with locale menu',
    localeController: i18nController,
};

export const WithThemeMenuAndLocaleMenu: StoryFn<HeaderProps> = Template.bind({});
WithThemeMenuAndLocaleMenu.args = {
    children: 'Header with theme and locale menu',
    themeController: themeController,
    localeController: i18nController,
};