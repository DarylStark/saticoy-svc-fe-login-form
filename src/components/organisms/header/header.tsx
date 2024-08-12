import React from 'react';
import { Flex, Heading, Box } from '@chakra-ui/react';

interface HeaderProps {
    children?: string
    extraMenus: React.ReactNode
}

function Header(props: HeaderProps) {
    return (
        <Flex direction='row' align='center' height='48px'>
            <Box flexGrow={1}>
                <Heading size='md' fontWeight='normal'>
                    {props.children}
                </Heading>
            </Box>
            <Box flexGrow={0}>
                {props.extraMenus}
            </Box>
        </Flex>
    )
}

export default Header;
export type { HeaderProps }