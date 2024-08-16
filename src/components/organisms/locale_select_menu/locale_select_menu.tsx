import {
    Menu,
    MenuButton,
    MenuList,
    IconButton,
} from '@chakra-ui/react'
import SelectableItemMenu, { SelectableItemMenuItemProp } from '../../molecule/selectable_item_menu/selectable_item_menu';
import { HiLanguage } from "react-icons/hi2";
import { useTranslation } from 'react-i18next';

interface LocaleSelectMenuProps {
    locales: SelectableItemMenuItemProp[]
    selectedLocale: string
    onChange?: (new_locale: string) => void
}

function LocaleSelectMenu(props: LocaleSelectMenuProps) {
    const { t } = useTranslation();

    // Callbacks for the changes
    const onChangeLocale = (new_locale: string | string[]) => {
        if (Array.isArray(new_locale))
            return props.onChange?.(new_locale[0]);
        return props.onChange?.(new_locale);
    };

    // The component
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HiLanguage />}
                variant='none'
                size='lg'
                fontSize={24}
            />
            <MenuList>
                <>
                    <SelectableItemMenu
                        defaultValue={props.selectedLocale}
                        onChange={onChangeLocale}
                        items={[
                            { value: 'auto', name: t('locales.automatic_locale') },
                            ...props.locales
                        ]}
                    />
                </>
            </MenuList>
        </Menu>
    );
}

export default LocaleSelectMenu;
export type { LocaleSelectMenuProps }