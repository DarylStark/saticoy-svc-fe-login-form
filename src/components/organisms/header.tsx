import SettingsMenu from './settings_menu';
import ThemeSelectMenu from './theme_select_menu/theme_select_menu';
import './header.scss';

interface HeaderProps {
    children?: string,
    showSettings?: boolean,
    showThemeSelectMenu: boolean
}

function Header(props: HeaderProps) {
    return (
        <header className='header'>
            <h1>{props.children}</h1>
            {props.showThemeSelectMenu && <ThemeSelectMenu />}
            {props.showSettings &&
                <SettingsMenu />}
        </header>
    )
};

export default Header;
export type { HeaderProps }