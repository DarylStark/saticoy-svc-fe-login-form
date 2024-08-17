import { MenuDivider } from '@chakra-ui/react';
import UserIconMenu, { UserSelectableItemMenuProps } from './user_icon_menu';
import SelectableItemMenu from '../../molecules/selectable_item_menu/selectable_item_menu';
import { StoryFn } from "@storybook/react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default {
    title: 'Organisms/UserSelectableItemMenu',
    component: UserIconMenu,
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
        <UserIconMenu {...args}>
            {args.children}
        </UserIconMenu>

export const OneMenu = Template.bind({});
OneMenu.args = {
    icon: <BsThreeDotsVertical />,
    children: <SelectableItemMenu defaultValue='item1' items={itemsMenu1} />,
}

export const TwoMenus = Template.bind({});
TwoMenus.args = {
    icon: <BsThreeDotsVertical />,
    children: <>
        <SelectableItemMenu defaultValue='item1' items={itemsMenu1} />
        <MenuDivider />
        <SelectableItemMenu defaultValue='item1' items={itemsMenu1} />
    </>,
}
