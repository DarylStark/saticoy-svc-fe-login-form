import { useState } from 'react';
import { Menu, Popover, Switch, Divider } from 'antd';
import { FaGear } from "react-icons/fa6";
import { ClickParam } from 'antd/lib/menu';

import { theme_manager } from '../../globals';

function MenuItems() {
    const [is_dark_mode, set_is_dark_mode] = useState(theme_manager.get_active_mode());

    theme_manager.on_set_mode(set_is_dark_mode);

    const toggleDarkMode = () => {
        theme_manager.toggle_mode();
    }

    const menu_click = (param: ClickParam) => {
        if (param.key === 'toggle_dark_mode')
            return toggleDarkMode();
        if (param.key === 'set_saticoy')
            return theme_manager.activate_theme('Saticoy');
        if (param.key === 'set_ugly')
            return theme_manager.activate_theme('Ugly');
    }

    return (
        <Menu selectable={false} mode='vertical' onClick={menu_click}>
            <Menu.Item key='toggle_dark_mode' icon={<FaGear />}>
                Toggle dark mode
                <Switch size="small" checked={is_dark_mode === 'dark'} onChange={toggleDarkMode} />
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
            <FaGear />
        </Popover>
    );
}