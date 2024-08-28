// Imports from shared components
import Header from '../../molecule/header/header'

// Imports from Saticoy shared components
import SaticoyThemeSelectMenu from '../user-icon-menu/saticoy-theme-select-menu/saticoy-theme-select-menu';
import SaticoyLocaleSelectMenu from '../user-icon-menu/saticoy-locale-select-menu/saticoy-locale-select-menu';

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