// src/components/Button.stories.tsx
import Header, { HeaderProps } from "./header";

export default {
    title: 'Organisms/Header',
    component: Header,
};

const Template = (props: HeaderProps) => <Header {...props} />;

export const NoSettingsMenu = Template.bind({});
NoSettingsMenu.args = {
    children: 'Header without settings menu',
};

export const WithSettingsMenu = Template.bind({});
WithSettingsMenu.args = {
    children: 'Header with settings menu',
    showSettings: true
};