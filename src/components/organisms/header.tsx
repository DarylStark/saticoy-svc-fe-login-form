import SettingsMenu from './settings_menu';
import ThemeSelectMenu from './theme_select_menu/theme_select_menu';
import './header.scss';
import ThemeController from '../../theme-controller/theme-controller';

interface HeaderProps {
    children?: string,
    showSettings?: boolean
    themeController?: ThemeController;
}

function Header(props: HeaderProps) {
    return (
        <header className='header'>
            <h1>{props.children}</h1>
            {props.themeController &&
                <ThemeSelectMenu
                    themeController={props.themeController} />}
            {props.showSettings &&
                <SettingsMenu />}
        </header>
    )
};

export default Header;
export type { HeaderProps }