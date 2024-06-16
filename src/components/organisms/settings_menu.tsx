import { useState } from 'react';
import { Menu, Popover, Switch, Divider } from 'antd';
import { FaGear } from "react-icons/fa6";
import { ClickParam } from 'antd/lib/menu';

import { theme_manager } from '../../globals';
import { ThemeMode } from '../../theme-manager/theme';

function MenuItems() {
    const [current_theme_mode, set_current_theme_mode] = useState(theme_manager.get_active_mode());
    theme_manager.on_set_mode(set_current_theme_mode);

    const toggleDarkMode = (value: boolean) => {
        console.log(value);
        theme_manager.set_mode(value ? ThemeMode.Dark : ThemeMode.Light);
    }

    return (
        <Menu selectable={false} mode='vertical'>
            <Menu.Item key='toggle_dark_mode' icon={<FaGear />}>
                Dark theme
                <Switch size="small"
                    checked={current_theme_mode === 'dark'}
                    onChange={toggleDarkMode} />
            </Menu.Item>
            <Divider />
            <Menu.Item key='set_saticoy' icon={<FaGear />}>
                Saticoy
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