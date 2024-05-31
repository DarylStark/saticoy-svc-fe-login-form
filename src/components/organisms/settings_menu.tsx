import { useState } from 'react';
import { Menu, Popover, Switch } from 'antd';
import { FaGear } from "react-icons/fa6";
import { ClickParam } from 'antd/lib/menu';

// Props
interface AccountMenuProps {
    toggle_theme: () => void;
}

export default function AccountMenu({ toggle_theme }: AccountMenuProps) {
    const [open, set_open] = useState(false);

    const handle_menu_click = (param: ClickParam) => {
        if (param.key == 'toggle_dark_mode') {
            toggle_theme();
        }
    };

    const handle_open_change = (newOpen: boolean) => {
        set_open(newOpen);
    };

    const menu = (
        <Menu selectable={false} mode='vertical' onClick={handle_menu_click}>
            <Menu.Item key={'toggle_dark_mode'} icon={<FaGear />}>
                Toggle dark mode
                <Switch size="small" defaultChecked />
            </Menu.Item>
        </Menu>
    );

    return (
        <Popover content={menu} placement="bottomRight" arrow={false} trigger='click' open={open} onOpenChange={handle_open_change}>
            <FaGear />
        </Popover>
    );
}