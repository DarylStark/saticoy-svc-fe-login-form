import SettingsMenu from './settings_menu';
import './header.scss';

interface HeaderProps {
    children?: string,
    showSettings?: boolean
}

function Header(props: HeaderProps) {
    return (
        <header className='header'>
            <h1>{props.children}</h1>
            {props.showSettings &&
                <SettingsMenu />}
        </header>
    )
};

export default Header;
export type { HeaderProps }