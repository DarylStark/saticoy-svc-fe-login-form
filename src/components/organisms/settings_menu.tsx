import { useState } from 'react';
import { Menu, Popover, Switch, Divider } from 'antd';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import { FaGear } from "react-icons/fa6";

import { i18n_manager, local_preferences_strategy, browser_strategy } from '../../globals';

import './settings_menu.scss'

import { useTranslation } from 'react-i18next';

import { themeController } from '../../globals/theme';
import { ThemeMode } from '../../theme-manager/theme';


// TODO: Split the language menu and the theme menu into separate components

function MenuItems() {
    const { t } = useTranslation();

    // Themes
    const theme_list = themeController.theme_repository.getNames(true);
    const [currentMode, setMode] = useState(themeController.selectedMode);
    themeController.eventBus?.on('mode_changed', () => {
        setMode(themeController.selectedMode);
    });
    const toggleMode = () => {
        themeController.toggleMode();
    }
    const setTheme = (themeName: string) => {
        themeController.selectedTheme = themeName;
    }
    const themeMenuClick: MenuClickEventHandler = ({ key }) => {
        if (key == 'toggle_dark_mode')
            return toggleMode();
        setTheme(key);
    }

    // Languages
    const language_menu_click: MenuClickEventHandler = ({ key }) => {
        i18n_manager.strategy?.clear();

        if (key === 'default_browser_language') {
            i18n_manager.setStrategy(browser_strategy);
            i18n_manager.retrieveLocaleKey();
            return;
        }

        i18n_manager.setStrategy(local_preferences_strategy);
        i18n_manager.setLocaleKey(key);
    }

    const get_lanauge_title = (language_code: string) => {
        return t(`locales.${language_code} `);
    }

    const language_list = i18n_manager.localeRepository.getNames(false).sort((a: string, b: string) => get_lanauge_title(a) > get_lanauge_title(b) ? 1 : -1);
    const language_list_menu = language_list.map(key => {
        return (
            <Menu.Item key={key} icon={<FaGear />}>
                {get_lanauge_title(key)}
            </Menu.Item>
        );
    });

    return (
        <>
            {/* Theme menu */}
            <Menu selectable={false} mode='vertical' onClick={themeMenuClick}>
                <Menu.Item key='toggle_dark_mode' icon={<FaGear />} className='settings-menu--toggle'>
                    <div className='settings-menu-item'>
                        <div>Dark theme</div>
                        <div>
                            <Switch
                                size="default"
                                value={currentMode == ThemeMode.Dark}
                                onChange={toggleMode}
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

            {/* Language menu */}
            <Menu selectable={false} mode='vertical' onClick={language_menu_click}>
                <Menu.Item key='default_browser_language' icon={<FaGear />}>
                    Default language
                </Menu.Item>
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