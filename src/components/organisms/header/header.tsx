import React from 'react';
import { Flex, Heading, Box } from '@chakra-ui/react';
import LocaleSelectMenu from '../../organisms/locale_select_menu/locale_select_menu';
// import './header.scss';
import ThemeController from '../../../theme-controller/theme-controller';
import I18nController from '../../../internationalization/i18n-controller';

interface HeaderProps {
    children?: string,
    themeController?: ThemeController
    localeController?: I18nController,
    extraMenus: React.ReactNode
}

function Header(props: HeaderProps) {
    return (
        <Flex direction='row' align='center' height='48px'>
            <Box flexGrow={1}>
                <Heading size='md' fontWeight='normal'>{props.children}</Heading>
            </Box>
            <Box flexGrow={0}>
                {props.extraMenus}
                {props.localeController &&
                    <LocaleSelectMenu
                        localeController={props.localeController} />}
            </Box>
        </Flex>
    )
}

export default Header;
export type { HeaderProps }