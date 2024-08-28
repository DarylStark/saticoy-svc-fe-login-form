import UserSelectableItemMenu from '../user-selectable-item-menu';
import SelectableItemMenu, { SelectableItemMenuItemProp } from '../../selectable-item-menu/selectable-item-menu';
import { HiLanguage } from "react-icons/hi2";

interface LocaleSelectMenuProps {
    locales: SelectableItemMenuItemProp[]
    selectedLocale: string
    onChange?: (new_locale: string) => void
    stringAutomaticLanguage: string
}

function LocaleSelectMenu(props: LocaleSelectMenuProps) {
    // Callbacks for the changes
    const onChangeLocale = (new_locale: string | string[]) => {
        if (Array.isArray(new_locale))
            return props.onChange?.(new_locale[0]);
        return props.onChange?.(new_locale);
    };

    return (
        <UserSelectableItemMenu icon={<HiLanguage />}>
            <SelectableItemMenu
                defaultValue={props.selectedLocale}
                value={props.selectedLocale}
                onChange={onChangeLocale}
                items={[
                    {
                        value: 'auto',
                        name: props.stringAutomaticLanguage
                    },
                    ...props.locales
                ]}
            />
        </UserSelectableItemMenu>
    )
}

export default LocaleSelectMenu;
export type { LocaleSelectMenuProps }