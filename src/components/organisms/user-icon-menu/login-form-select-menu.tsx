import { SelectableItemMenu, SelectableItemMenuItemProp } from '@saticoy/ui';
import { UserSelectableItemMenu } from '@saticoy/ui';
import { FaRegUser } from 'react-icons/fa';

interface LoginFormSelectMenuProps {
    onChange?: (new_value: string | string[]) => void;
    items: SelectableItemMenuItemProp[];
    defaultValue: string;
    value: string;
}

function LoginFormSelectMenu(props: LoginFormSelectMenuProps) {
    return (
        <UserSelectableItemMenu icon={<FaRegUser />}>
            <SelectableItemMenu
                defaultValue={props.defaultValue}
                value={props.value}
                onChange={props.onChange}
                items={props.items}
            />
        </UserSelectableItemMenu>
    );
}

export default LoginFormSelectMenu;
