// src/components/Button.stories.tsx
import Header, { HeaderProps } from "./header";
import { StoryFn } from "@storybook/react";

import ThemeSelectMenu from "../theme_select_menu/theme_select_menu";
import LocaleSelectMenu from "../locale_select_menu/locale_select_menu";

export default {
    title: 'Organisms/Layout/Header',
    component: Header,
};

const Template = (props: HeaderProps) => <Header {...props} />;

export const Default: StoryFn<HeaderProps> = Template.bind({});
Default.args = {
    children: 'Header title',
};

export const WithMenus: StoryFn<HeaderProps> = Template.bind({});
WithMenus.args = {
    children: 'Header title',
    extraMenus: <>
        <ThemeSelectMenu
            themes={[
                { 'name': 'Example theme 1', value: 'example_theme_1' },
                { 'name': 'Example theme 2', value: 'example_theme_2' },
                { 'name': 'Example theme 3', value: 'example_theme_3' },
                { 'name': 'Example theme 4', value: 'example_theme_4' },
            ]}
            selectedMode='auto'
            selectedTheme='example_theme_1'
        />
        <LocaleSelectMenu
            locales={[
                { 'name': 'English', value: 'en' },
                { 'name': 'Español', value: 'es' },
                { 'name': 'Français', value: 'fr' },
                { 'name': 'Deutsch', value: 'de' },
            ]}
            selectedLocale='auto'
        />
    </>
};