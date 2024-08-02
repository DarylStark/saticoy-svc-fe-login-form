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
import MFATOTP from './forms/mfa_topt'

interface LoginFormProps {
    error?: string
    warning?: string
    info?: string
    text?: string
}

function GetForm(props: { status: number } = { status: 0 }) {
    switch (props.status) {
        case 0:
            return <UsernameAndPassword />
        case 1:
            return <MFATOTP />
    }
    return <></>
}

function LoginForm(props: LoginFormProps) {
    const { t } = useTranslation();
    return <>
        <Card variant='outline' size='dialog'>
            <CardHeader>
                <Heading size='xl'>{t('application.name')}</Heading>
            </CardHeader>
            <CardBody>
                <Text>
                    {props.text}
                </Text>

                <VStack alignItems='left' spacing={4} paddingBottom={2} paddingTop={2}>
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
                </VStack>

                <form onSubmit={(e) => e.preventDefault()}>
                    <GetForm status={0} />
                </form>
            </CardBody>
        </Card >
    </>
}

export default LoginForm
export type { LoginFormProps }