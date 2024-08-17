import UserIconMenu from '../../../molecules/user_icon_menu/user_icon_menu';
import SelectableItemMenu, { SelectableItemMenuItemProp } from '../../../molecules/selectable_item_menu/selectable_item_menu';
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
        <UserIconMenu icon={<HiLanguage />}>
            <SelectableItemMenu
                defaultValue={props.selectedLocale}
                onChange={onChangeLocale}
                items={[
                    {
                        value: 'auto',
                        name: props.stringAutomaticLanguage
                    },
                    ...props.locales
                ]}
            />
        </UserIconMenu>
    )
}

export default LocaleSelectMenu;
export type { LocaleSelectMenuProps }