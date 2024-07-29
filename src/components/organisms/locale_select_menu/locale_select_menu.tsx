import { useState } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    IconButton,
} from '@chakra-ui/react'
import SelectableItemMenu, { SelectableItemMenuItemProp } from '../../molecule/selectable_item_menu/selectable_item_menu';
import { HiLanguage } from "react-icons/hi2";
import I18nController from '../../../internationalization/i18n-controller';
import { useTranslation } from 'react-i18next';

interface LocaleSelectMenuProps {
    localeController: I18nController
}

function LocaleSelectMenu(props: LocaleSelectMenuProps) {
    const { t } = useTranslation();
    const [render, setRender] = useState(false);

    const reRender = () => {
        setRender(!render);
    }

    props.localeController.eventBus?.on('i18n_locale_changed', reRender);

    // Retrievers for values
    const availableLocales = (): SelectableItemMenuItemProp[] => {
        const themes = props.localeController.localeRepository.getNames(false).map((name: string) => {
            return { value: name, name: t(`locales.${name}`) }
        });
        return [
            { value: '__default', name: 'Automatic language' },
            ...themes
        ]
    }

    const getSelectedLocale = (): string => {
        if (props.localeController.isAutoLocale)
            return '__default';
        return props.localeController.selectedLocale || '';
    }

    // Selector
    const selectLocale = (value: string | string[]) => {
        if (value === '__default')
            return props.localeController.isAutoLocale = true;

        if (!Array.isArray(value))
            props.localeController.selectedLocale = value;
    }

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
                        defaultValue={getSelectedLocale()}
                        onChange={selectLocale}
                        items={availableLocales()}
                    />
                </>
            </MenuList>
        </Menu>
    );
}

export default LocaleSelectMenu;