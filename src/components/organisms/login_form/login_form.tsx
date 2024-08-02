import {
    Alert,
    AlertIcon,
    Card,
    CardBody,
    CardHeader,
    Heading,
    VStack,
    Text
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';

import UsernameAndPassword from './forms/username_and_password'
import MagicLink from './forms/magic_link';
import MFATOTP from './forms/mfa_topt'

interface LoginFormProps {
    error?: string
    warning?: string
    info?: string
    text?: string
    form: number
}

function GetForm(props: { status: number }) {
    switch (props.status) {
        case 1:
            return <UsernameAndPassword />
        case 2:
            return <MFATOTP />
        case 3:
            return <MagicLink />
    }
    return <p>ERROR</p>
}

function LoginForm(props: LoginFormProps) {
    const { t } = useTranslation();
    return <>
        <Card variant='outline' size='dialog'>
            <CardHeader>
                <Heading size='xl' align='center'>{t('application.name')}</Heading>
            </CardHeader>
            <CardBody>
                <Text align='center'>
                    {props.text}
                </Text>
                {(props.info || props.warning || props.error) && (

                    <VStack alignItems='left' spacing={4} paddingBottom={2} paddingTop={4}>
                        {props.info &&
                            <Alert status='info'>
                                <AlertIcon />
                                {props.info}
                            </Alert>
                        }

                        {props.warning &&
                            <Alert status='warning'>
                                <AlertIcon />
                                {props.warning}
                            </Alert>
                        }

                        {props.error &&
                            <Alert status='error'>
                                <AlertIcon />
                                {props.error}
                            </Alert>
                        }
                    </VStack>)}

                <form onSubmit={(e) => e.preventDefault()}>
                    <GetForm status={props.form} />
                </form>
            </CardBody>
        </Card >
    </>
}

export default LoginForm
export type { LoginFormProps }