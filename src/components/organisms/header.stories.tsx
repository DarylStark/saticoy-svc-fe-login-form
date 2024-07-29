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