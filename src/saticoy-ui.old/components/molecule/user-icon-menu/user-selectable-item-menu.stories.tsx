import { MenuDivider } from '@chakra-ui/react';
import UserSelectableItemMenu, { UserSelectableItemMenuProps } from './user-selectable-item-menu';
import SelectableItemMenu from '../selectable-item-menu/selectable-item-menu';
import { StoryFn } from "@storybook/react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default {
    title: 'Molecules/UserSelectableItemMenu',
    component: UserSelectableItemMenu,
};

const itemsMenu1 = [
    {
        value: 'item1',
        name: 'Item 1'
    },
    {
        value: 'item2',
        name: 'Item 2'
    },
    {
        value: 'item3',
        name: 'Item 3'
    },
]

const Template: StoryFn<UserSelectableItemMenuProps> =
    (args: UserSelectableItemMenuProps) =>
        <UserSelectableItemMenu {...args}>
            {args.children}
        </UserSelectableItemMenu>

export const OneMenu = Template.bind({});
OneMenu.args = {
    icon: <BsThreeDotsVertical />,
    children: <SelectableItemMenu defaultValue='item1' items={itemsMenu1} value='item1' />,
}

export const TwoMenus = Template.bind({});
TwoMenus.args = {
    icon: <BsThreeDotsVertical />,
    children: <>
        <SelectableItemMenu defaultValue='item1' items={itemsMenu1} value='item1' />
        <MenuDivider />
        <SelectableItemMenu defaultValue='item1' items={itemsMenu1} value='item1' />
    </>,
}
