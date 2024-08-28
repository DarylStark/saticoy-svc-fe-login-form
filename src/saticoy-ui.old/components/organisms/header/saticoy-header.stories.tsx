import SaticoyHeader, { SaticoyHeaderProps } from "./saticoy-header";
import { StoryFn } from "@storybook/react";

export default {
    title: 'Organisms/SaticoyHeader',
    component: SaticoyHeader,
};

const Template = (props: SaticoyHeaderProps) => <SaticoyHeader {...props} />;

export const Default: StoryFn<SaticoyHeaderProps> = Template.bind({});
Default.args = {
    children: 'Header title'
}