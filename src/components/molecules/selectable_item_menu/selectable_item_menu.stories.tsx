import {
    Menu,
} from '@chakra-ui/react'
import SelectableItemMenu, { SelectableItemMenuProps, SelectableItemMenuItemProp } from "./selectable_item_menu";
import { StoryFn } from "@storybook/react";

// Testdata
const items: SelectableItemMenuItemProp[] = [
    {
        name: 'Item 1',
        value: 'item1'
    },
    {
        name: 'Item 2',
        value: 'item2'
    },
    {
        name: 'Item 3',
        value: 'item3'
    },
    {
        name: 'Item 4',
        value: 'item4'
    }
];

export default {
    title: 'Molecules/SelectableItemMenu',
    component: SelectableItemMenu,
};

const Template: StoryFn<SelectableItemMenuProps> = (props: SelectableItemMenuProps) => <Menu><SelectableItemMenu {...props} /></Menu>;

export const Default = Template.bind({});
Default.args = {
    items: items,
    defaultValue: 'item1'
};

