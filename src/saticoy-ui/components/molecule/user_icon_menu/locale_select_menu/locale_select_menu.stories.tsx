import { StoryFn } from "@storybook/react";
import LocaleSelectMenu, { LocaleSelectMenuProps } from "./locale_select_menu";
import { action } from '@storybook/addon-actions';

// Default component
export default {
    title: 'Organisms/UserIconMenus/LocaleSelectMenu',
    component: LocaleSelectMenu,
};

const Template = (props: LocaleSelectMenuProps) => <LocaleSelectMenu {...props} />;

export const Default: StoryFn<LocaleSelectMenuProps> = Template.bind({});
Default.args = {
    locales: [
        { 'name': 'English', value: 'en' },
        { 'name': 'Español', value: 'es' },
        { 'name': 'Français', value: 'fr' },
        { 'name': 'Deutsch', value: 'de' },
    ],
    onChange: action('Locale changed'),
    selectedLocale: 'auto',
    stringAutomaticLanguage: 'Automatic language'
}