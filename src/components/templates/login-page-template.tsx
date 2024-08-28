// Imports from React
import { useState } from 'react';

// Imports from React I18Next
import { useTranslation } from 'react-i18next';

// Imports from Chakra UI
import { Flex, Box, useMediaQuery } from '@chakra-ui/react'

// Imports from shared components
import { SaticoyHeader } from '@saticoy/ui'
import { SelectableItemMenuItemProp } from '@saticoy/ui';

// Imports from local components
import LoginFormCard, { LoginFormType } from '../organisms/login-form-card/login-form-card'
import LoginFormTypeSelectMenu from '../organisms/user-icon-menu/login-form-select-menu';

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

// Component
function LoginPageTemplate() {
    const { t } = useTranslation();
    const [selectedForm, setSelectedForm] = useState(LoginFormType.UsernameAndPassword);

    const setForm = (new_value: string | string[]) => {
        setSelectedForm(new_value as LoginFormType);
    }

    const [isMobileView] = useMediaQuery('(max-width: 768px)');

    return (
        <Flex h='100dvh' direction='column' p='8px'>
            <Box flexGrow={0}>
                <SaticoyHeader
                    extraMenus={
                        <>
                            <LoginFormTypeSelectMenu
                                defaultValue={primaryForms[0].value?.toString() || ''}
                                onChange={setForm}
                                value={selectedForm}
                                items={primaryForms} />
                        </>
                    }
                />
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