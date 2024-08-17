// Imports from React
import { useState } from 'react';

// Imports from React I18Next
import { useTranslation } from 'react-i18next';

// Imports from Chakra UI
import { Flex, Box, useMediaQuery } from '@chakra-ui/react'

// Imports from shared components
import Header from '../../components/molecules/header/header'
import { SelectableItemMenuItemProp } from '../../components/molecules/selectable_item_menu/selectable_item_menu';

// Imports from Saticoy shared components
import SaticoyThemeSelectMenu from '../../saticoy_components/organisms/UserIconMenus/saticoy_theme_select_menu/saticoy_theme_select_menu';
import SaticoyLocaleSelectMenu from '../../saticoy_components/organisms/UserIconMenus/saticoy_locale_select_menu/saticoy_locale_select_menu';

// Imports from local components
import LoginFormCard, { LoginFormType } from '../organisms/login_form_card/login_form_card'
import LoginFormTypeSelectMenu from '../organisms/login_form_select_menu/login_form_select_menu';

// Themes
import ThemeController from "../../theme-controller/theme-controller";
import SaticoyChakraStyle from "../../themes/saticoy-style"

// Internationalization
import I18nController from "../../internationalization/i18n-controller";
import { i18NextLocaleData } from '../../languages/i18next_locale_data';

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
    themeController: ThemeController<SaticoyChakraStyle>
    i18nController: I18nController<i18NextLocaleData>
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
                        menus={
                            <>
                                <LoginFormTypeSelectMenu
                                    defaultValue={primaryForms[0].value?.toString() || ''}
                                    onChange={setForm}
                                    items={primaryForms} />
                                <SaticoyThemeSelectMenu
                                    themeController={props.themeController} />
                                <SaticoyLocaleSelectMenu
                                    i18nController={props.i18nController} />
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
export type { LoginPageTemplateProps }