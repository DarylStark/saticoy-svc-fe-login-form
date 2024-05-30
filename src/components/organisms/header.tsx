import SettingsMenu from './settings_menu';
import './header.scss';

// Props
interface HeaderProps {
    toggle_theme: () => void
}


function Header({ toggle_theme }: HeaderProps) {
    return (
        <header className='header'>
            <SettingsMenu toggle_theme={toggle_theme} />
        </header>
    )
};

export default Header;