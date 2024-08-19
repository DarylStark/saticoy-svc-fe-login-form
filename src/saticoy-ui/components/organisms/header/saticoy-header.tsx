// Imports from shared components
import Header from '../../molecule/header/header'

// Imports from Saticoy shared components
import SaticoyThemeSelectMenu from '../../organisms/user_icon_menu/saticoy_theme_select_menu/saticoy_theme_select_menu';
import SaticoyLocaleSelectMenu from '../../organisms/user_icon_menu/saticoy_locale_select_menu/saticoy_locale_select_menu';

interface SaticoyHeaderProps {
    children?: string
    extraMenus?: React.ReactNode
}

function SaticoyHeader(props: SaticoyHeaderProps) {
    return (
        <header>
            <Header
                menus={
                    <>
                        {props.extraMenus}
                        <SaticoyThemeSelectMenu />
                        <SaticoyLocaleSelectMenu />
                    </>
                }
            >
                {props.children}
            </Header>
        </header>
    )
}

export default SaticoyHeader
export type { SaticoyHeaderProps }