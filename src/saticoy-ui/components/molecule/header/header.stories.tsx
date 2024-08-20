import Header, { HeaderProps } from "./header";
import { StoryFn } from "@storybook/react";

import UserSelectableItemMenu from "../user-icon-menu/user-selectable-item-menu";
import SelectableItemMenu from "../selectable-item-menu/selectable-item-menu";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaGear } from "react-icons/fa6";


export default {
    title: 'Molecules/Header',
    component: Header,
};

const Template = (props: HeaderProps) => <Header {...props} />;

export const Default: StoryFn<HeaderProps> = Template.bind({});
Default.args = {
    children: 'Header title',
};

export const WithMenus: StoryFn<HeaderProps> = Template.bind({});
WithMenus.args = {
    children: 'Header title',
    menus: <>
        <UserSelectableItemMenu icon={<FaGear />}>
            <SelectableItemMenu
                items={[
                    { 'name': 'Menuitem 1', value: 'example_menuitem_1' },
                    { 'name': 'Menuitem 2', value: 'example_menuitem_2' },
                    { 'name': 'Menuitem 3', value: 'example_menuitem_3' },
                    { 'name': 'Menuitem 4', value: 'example_menuitem_4' },
                ]}
                defaultValue='auto'
                value='auto'
            />
        </UserSelectableItemMenu>
        <UserSelectableItemMenu icon={<BsThreeDotsVertical />}>
            <SelectableItemMenu
                items={[
                    { 'name': 'Menuitem 1', value: 'example_menuitem_1' },
                    { 'name': 'Menuitem 2', value: 'example_menuitem_2' },
                    { 'name': 'Menuitem 3', value: 'example_menuitem_3' },
                    { 'name': 'Menuitem 4', value: 'example_menuitem_4' },
                ]}
                defaultValue='auto'
                value='auto'
            />
        </UserSelectableItemMenu>
    </>
};