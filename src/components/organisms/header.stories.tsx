// src/components/Button.stories.tsx
import { Button } from "antd";
import Header from "./header";

export default {
    title: 'Organisms/Header',
    component: Header,
};

const Template = () => <Header />;

export const Default = Template.bind({});