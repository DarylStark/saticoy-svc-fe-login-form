import Header from '../organisms/header/header'
import LoginFormCard, { LoginFormType } from '../organisms/login_form_card/login_form_card'
import { useTranslation } from 'react-i18next';
import LoginFormTypeSelectMenu from '../organisms/login_form_select_menu/login_form_select_menu';
import { useState } from 'react';
import { SelectableItemMenuItemProp } from '../molecule/selectable_item_menu/selectable_item_menu';
import { Flex, Box, useMediaQuery } from '@chakra-ui/react'

// List with available forms
const primaryForms: SelectableItemMenuItemProp[] = [
    {
        value: LoginFormType.UsernameAndPassword,
        name: 'Username and password'
    },
    {
        value: LoginFormType.AuthorizeFromSession,
        name: 'Authorize from logged in session'
    },
    {
        value: LoginFormType.MagicCode,
        name: 'Magic code in email'
    },
]

interface LoginPageTemplateProps {
    headerMenus?: React.ReactNode
}

// Component
function LoginPageTemplate(props: LoginPageTemplateProps) {
    const { t } = useTranslation();
    const [selectedForm, setSelectedForm] = useState(LoginFormType.UsernameAndPassword);

    const setForm = (new_value: string | string[]) => {
        setSelectedForm(new_value as LoginFormType);
    }

    const [isMobileView] = useMediaQuery('(max-width: 768px)');

    return (
        <Flex h='100dvh' direction='column' p='8px'>
            <Box flexGrow={0}>
                <header>
                    <Header
                        extraMenus={
                            <>
                                <LoginFormTypeSelectMenu
                                    defaultValue={primaryForms[0].value?.toString() || ''}
                                    onChange={setForm}
                                    items={primaryForms} />
                                {props.headerMenus}
                            </>
                        }
                    />
                </header>
            </Box>
            <Flex
                flexGrow={1}
                direction='column'
                align='center'
                position='relative'
            >
                <Box
                    maxW='100%'
                    position='absolute'
                    top={isMobileView ? '0' : '50%'}
                    left='50%'
                    transform={isMobileView ? 'translate(-50%, 0)' : 'translate(-50%, -50%)'}
                    transition='top 0.5s ease-in-out, transform 0.5s ease-in-out'
                >
                    <main>
                        <LoginFormCard
                            form_type={selectedForm}
                            text={t('login_form.tagline')} />
                    </main>
                </Box>
            </Flex>
        </Flex>
    )
}

export default LoginPageTemplate
export { LoginPageTemplateProps }