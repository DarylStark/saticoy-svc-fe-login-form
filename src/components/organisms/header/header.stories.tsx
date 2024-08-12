// src/components/Button.stories.tsx
import Header, { HeaderProps } from "./header";
import { StoryFn } from "@storybook/react";

export default {
    title: 'Organisms/Layout/Header',
    component: Header,
};

const Template = (props: HeaderProps) => <Header {...props} />;

export const Default: StoryFn<HeaderProps> = Template.bind({});
Default.args = {
    children: 'Header title',
};