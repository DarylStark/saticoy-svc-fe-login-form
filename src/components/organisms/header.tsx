import ThemeSelectMenu from './theme_select_menu/theme_select_menu';
import LocaleSelectMenu from './locale_select_menu/locale_select_menu';
import './header.scss';
import ThemeController from '../../theme-controller/theme-controller';
import I18nController from '../../internationalization/i18n-controller';

interface HeaderProps {
    children?: string,
    themeController?: ThemeController
    localeController?: I18nController
}

function Header(props: HeaderProps) {
    return (
        <header className='header'>
            <h1>{props.children}</h1>
            {props.themeController &&
                <ThemeSelectMenu
                    themeController={props.themeController} />}
            {props.localeController &&
                <LocaleSelectMenu
                    localeController={props.localeController} />}
        </header>
    )
};

export default Header;
export type { HeaderProps }