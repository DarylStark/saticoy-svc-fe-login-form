// src/components/Button.stories.tsx
import Header, { HeaderProps } from "./header";

export default {
    title: 'Organisms/Header',
    component: Header,
};

const Template = (props: HeaderProps) => <Header {...props} />;

export const NoMenus = Template.bind({});
NoMenus.args = {
    children: 'Header without menus',
};

export const WithSettingsMenu = Template.bind({});
WithSettingsMenu.args = {
    children: 'Header with settings menu',
    showSettings: true
};

export const WithThemeSelectMenu = Template.bind({});
WithThemeSelectMenu.args = {
    children: 'Header with theme select menu',
    showThemeSelectMenu: true
};

export const WithThemeSelectAndSettingsMenu = Template.bind({});
WithThemeSelectAndSettingsMenu.args = {
    children: 'Header with theme select menu and settings menu',
    showSettings: true,
    showThemeSelectMenu: true
};