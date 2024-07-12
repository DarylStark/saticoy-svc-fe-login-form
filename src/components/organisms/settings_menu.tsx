import { useState } from 'react';
import { Menu, Popover, Switch, Divider } from 'antd';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import { FaGear } from "react-icons/fa6";

import { theme_manager, language_manager } from '../../globals';
import { ThemeMode } from '../../theme-manager/theme';

import './settings_menu.scss'

import i18n from '../../i18n';

import { useTranslation } from 'react-i18next';


// TODO: Split the language menu and the theme menu into separate components

function MenuItems() {
    const { t } = useTranslation();

    const [current_theme_mode, set_current_theme_mode] = useState(theme_manager.getActiveMode());
    const [theme_toggler_available, set_theme_toggler_available] = useState(theme_manager.hasBothModes());
    theme_manager.onSetMode(set_current_theme_mode);
    theme_manager.onSetStyle(() => set_theme_toggler_available(theme_manager.hasBothModes()));

    const toggleDarkMode = (value: boolean) => {
        theme_manager.setMode(value ? ThemeMode.Dark : ThemeMode.Light);
    }

    const theme_list = theme_manager.getThemeNames();

    const theme_menu_click: MenuClickEventHandler = ({ key }) => {
        // Set theme if it exists
        if (theme_list.indexOf(key) !== -1) {
            theme_manager.activateTheme(key);
        }

        switch (key) {
            case 'toggle_dark_mode':
                toggleDarkMode(!(current_theme_mode === 'dark'));
                break;
        }
    }

    const language_menu_click: MenuClickEventHandler = ({ key }) => {
        if (key === 'default_browser_language') {
            language_manager.setAutomaticLanguage();

            // Done with this function
            return;
        }

        // i18n.changeLanguage(key);
        language_manager.activateLanguage(key);
    }

    const get_lanauge_title = (language_code: string) => {
        return t(`languages.${language_code}`);
    }

    const language_list = language_manager.getAvailableLanguageCodes().sort((a: string, b: string) => get_lanauge_title(a) > get_lanauge_title(b) ? 1 : -1);
    const language_list_menu = language_list.map(language_code => {
        return (
            <Menu.Item key={language_code} icon={<FaGear />}>
                {t(`languages.${language_code}`)}
            </Menu.Item>
        );
    });

    return (
        <>
            <Menu selectable={false} mode='vertical' onClick={theme_menu_click}>
                <Menu.Item key='toggle_dark_mode' icon={<FaGear />} disabled={!theme_toggler_available} className='settings-menu--toggle'>
                    <div className='settings-menu-item'>
                        <div>Dark theme</div>
                        <div>
                            <Switch size="default"
                                checked={current_theme_mode === 'dark'}
                                onChange={toggleDarkMode}
                                disabled={!theme_toggler_available}
                            />
                        </div>
                    </div>
                </Menu.Item>
                <Divider />
                {
                    theme_list.map((theme) => (
                        <Menu.Item key={theme} icon={<FaGear />}>
                            {theme}
                        </Menu.Item>
                    ))
                }
            </Menu >
            <Divider />
            <Menu selectable={false} mode='vertical' onClick={language_menu_click}>
                <Menu.Item key='default_browser_language' icon={<FaGear />}>
                    Default language
                </Menu.Item>
                {/* {
                    language_manager.get_available_language_codes().forEach(language_code => {
                        <span>{language_code}</span>
                    });
                } */}
                {language_list_menu}
            </Menu>
        </>
    );
}

export default function AccountMenu() {
    const [open, set_open] = useState(false);
    const handle_open_change = (newOpen: boolean) => {
        set_open(newOpen);
    };

    return (
        <Popover content={<MenuItems></MenuItems>} placement="bottomRight" arrow={false} trigger='click' open={open} onOpenChange={handle_open_change}>
            <FaGear size={24} />
        </Popover>
    );
}