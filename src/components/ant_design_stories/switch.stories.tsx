// src/components/Button.stories.tsx
import { Switch } from "antd";

interface SwitchArgs {
    size: 'small' | 'default' | undefined;
}

export default {
    title: 'Ant Design/Switch',
    component: Switch,
};

const Template = (args: SwitchArgs) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: 'default',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
};