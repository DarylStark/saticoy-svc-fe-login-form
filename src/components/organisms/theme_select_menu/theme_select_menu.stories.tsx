import ThemeSelectMenu, { ThemeSelectMenuProps } from "./theme_select_menu";
import { StoryFn } from "@storybook/react";
import { action } from '@storybook/addon-actions';


// Default component
export default {
    title: 'Organisms/Menus/ThemeSelectMenu',
    component: ThemeSelectMenu,
};

const Template = (props: ThemeSelectMenuProps) => <ThemeSelectMenu {...props} />;

export const Default: StoryFn<ThemeSelectMenuProps> = Template.bind({});
Default.args = {
    themes: [
        { 'name': 'Example theme 1', value: 'example_theme_1' },
        { 'name': 'Example theme 2', value: 'example_theme_2' },
        { 'name': 'Example theme 3', value: 'example_theme_3' },
        { 'name': 'Example theme 4', value: 'example_theme_4' },
    ],
    selectedMode: 'auto',
    selectedTheme: 'testtheme1',
    onChangeMode: action('Mode changed'),
    onChangeTheme: action('Theme changed')
}
