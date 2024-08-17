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

import UsernameAndPassword from '../../organisms/login_forms/username_and_password'
import MagicCode from '../../organisms/login_forms/magic_code';
import AuthorizeFromSession from '../../organisms/login_forms/authorize_from_session';
import MFATOTPForm from '../../organisms/mfa_forms/mfa_topt'
import { FormEvent } from 'react';

enum LoginFormType {
    // Primary login forms
    UsernameAndPassword = 'username_and_password',
    MagicCode = 'magic_code',
    AuthorizeFromSession = 'authorize_from_session',

    // Secondary login forms
    MFATOTP = 'mfa_totp',
}

interface LoginFormCardProps {
    error?: string
    warning?: string
    info?: string
    text?: string
    form_type: LoginFormType
}

const formComponents = {
    [LoginFormType.UsernameAndPassword]: UsernameAndPassword,
    [LoginFormType.MagicCode]: MagicCode,
    [LoginFormType.AuthorizeFromSession]: AuthorizeFromSession,
    [LoginFormType.MFATOTP]: MFATOTPForm,
};

interface GetFormProps {
    form_type: LoginFormType,
    onSubmit: (e: FormEvent) => void
}

function GetForm(props: GetFormProps) {
    const FormComponent = formComponents[props.form_type] || (() => <p>Unrecognized form</p>);
    return <FormComponent
        onSubmit={props.onSubmit} />;
}

function LoginFormCard(props: LoginFormCardProps) {
    const { t } = useTranslation();

    return <>
        <Card variant='outline' size='dialog'>
            <CardHeader>
                <Heading size='xl' textAlign='center'>{t('application.name')}</Heading>
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

                <GetForm form_type={props.form_type} onSubmit={(e) => e.preventDefault()} />
            </CardBody>
        </Card >
    </>
}

export default LoginFormCard
export type { LoginFormCardProps }
export { LoginFormType }