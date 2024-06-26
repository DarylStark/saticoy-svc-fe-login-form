import { useState } from 'react';
import { Menu, Popover, Switch, Divider } from 'antd';
import { FaGear } from "react-icons/fa6";
import { ClickParam } from 'antd/lib/menu';

import { theme_manager } from '../../globals';
import { ThemeMode } from '../../theme-manager/theme';

import './settings_menu.scss'

function MenuItems() {
    const [current_theme_mode, set_current_theme_mode] = useState(theme_manager.get_active_mode());
    const [theme_toggler_available, set_theme_toggler_available] = useState(theme_manager.has_both_modes());
    theme_manager.on_set_mode(set_current_theme_mode);
    theme_manager.on_set_style(() => set_theme_toggler_available(theme_manager.has_both_modes()));

    const toggleDarkMode = (value: boolean) => {
        theme_manager.set_mode(value ? ThemeMode.Dark : ThemeMode.Light);
    }

    const theme_list = theme_manager.get_theme_names();

    const menu_click = (param: ClickParam) => {
        // Set theme if it exists
        if (theme_list.indexOf(param.key) !== -1) {
            theme_manager.activate_theme(param.key);
        }

        switch (param.key) {
            case 'toggle_dark_mode':
                toggleDarkMode(!(current_theme_mode === 'dark'));
                break;
        }
    }

    return (
        <Menu selectable={false} mode='vertical' onClick={menu_click}>
            <Menu.Item key='toggle_dark_mode' icon={<FaGear />} disabled={!theme_toggler_available}>
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