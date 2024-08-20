import {
    MenuOptionGroup,
    MenuItemOption
} from '@chakra-ui/react'

interface SelectableItemMenuItemProp {
    name: string
    value?: string
    isDiabled?: boolean
}

interface SelectableItemMenuProps {
    items: SelectableItemMenuItemProp[]
    onChange?: (new_value: string | string[]) => void
    defaultValue: string
    value: string
}

function SelectableItemMenu(props: SelectableItemMenuProps) {
    return (
        <MenuOptionGroup
            defaultValue={props.defaultValue}
            type='radio'
            onChange={props.onChange}
            value={props.value}
        >
            {props.items.map((item: SelectableItemMenuItemProp) => (
                <MenuItemOption
                    key={item.value || item.name}
                    value={item.value || item.name}
                    isDisabled={item.isDiabled}
                >
                    {item.name}
                </MenuItemOption>
            ))}
        </MenuOptionGroup>
    )
}

export type { SelectableItemMenuItemProp, SelectableItemMenuProps };
export default SelectableItemMenu;