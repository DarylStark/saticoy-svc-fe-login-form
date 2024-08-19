import SaticoyHeader, { SaticoyHeaderProps } from "./saticoy-header";
import { StoryFn } from "@storybook/react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";


export default {
    title: 'Organisms/SaticoyHeader',
    component: SaticoyHeader,
};

const Template = (props: SaticoyHeaderProps) => <SaticoyHeader {...props} />;

export const Default: StoryFn<SaticoyHeaderProps> = Template.bind({});
Default.args = {
    children: 'Header title'
}