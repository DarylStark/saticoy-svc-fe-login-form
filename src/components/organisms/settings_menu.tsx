import { useState } from 'react';
import { Menu, Popover, Switch, Divider } from 'antd';
import { FaGear } from "react-icons/fa6";
import { ClickParam } from 'antd/lib/menu';

import { theme_manager } from '../../globals';
import { ThemeMode } from '../../theme-manager/theme';

function MenuItems() {
    const [current_theme_mode, set_current_theme_mode] = useState(theme_manager.get_active_mode());
    const [theme_toggler_available, set_theme_toggler_available] = useState(theme_manager.has_both_modes());
    theme_manager.on_set_mode(set_current_theme_mode);
    theme_manager.on_set_style(() => set_theme_toggler_available(theme_manager.has_both_modes()));

    const toggleDarkMode = (value: boolean) => {
        theme_manager.set_mode(value ? ThemeMode.Dark : ThemeMode.Light);
    }

    const menu_click = (param: ClickParam) => {
        switch (param.key) {
            case 'toggle_dark_mode':
                toggleDarkMode(!(current_theme_mode === 'dark'));
                break;
            case 'set_saticoy':
                theme_manager.activate_theme('Saticoy');
                break;
            case 'set_ulgy':
                theme_manager.activate_theme('Very ugly theme');
                break;
        }
    }

    return (
        <Menu selectable={false} mode='vertical' onClick={menu_click}>
            <Menu.Item key='toggle_dark_mode' icon={<FaGear />} disabled={!theme_toggler_available}>
                Dark theme
                <Switch size="default"
                    checked={current_theme_mode === 'dark'}
                    onChange={toggleDarkMode}
                    disabled={!theme_toggler_available}
                />
            </Menu.Item>
            <Divider />
            <Menu.Item key='set_saticoy' icon={<FaGear />}>
                Saticoy
            </Menu.Item>
            <Menu.Item key='set_ulgy' icon={<FaGear />}>
                Ugly
            </Menu.Item>
        </Menu>
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