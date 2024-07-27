// src/components/Button.stories.tsx
import { Button } from "antd";

interface ButtonArgs {
    type: 'primary' | 'dashed' | 'text' | 'link' | undefined;
    children: string;
}

export default {
    title: 'Ant Design/Button',
    component: Button,
};

const Template = (args: ButtonArgs) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: undefined,
    children: 'Default Button',
};

export const Primary = Template.bind({});
Primary.args = {
    type: 'primary',
    children: 'Primary Button',
};

export const Dashed = Template.bind({});
Dashed.args = {
    type: 'dashed',
    children: 'Dashed Button',
};

export const Text = Template.bind({});
Text.args = {
    type: 'text',
    children: 'Text Button',
};

export const Link = Template.bind({});
Link.args = {
    type: 'link',
    children: 'Link Button',
};