import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Center,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    VStack,
    Text
} from '@chakra-ui/react'
import { FaRegUser, FaLock } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

interface LoginFormProps {
    error?: string
    warning?: string
    info?: string
};

function LoginForm(props: LoginFormProps) {
    const { t } = useTranslation();
    return <>
        <Card variant='outline'>
            <CardHeader>
                <Heading size='xl'>{t('login_form.login_title')}</Heading>
            </CardHeader>
            <CardBody>
                <VStack alignItems='left' spacing={4} paddingBottom={8}>
                    <Text>
                        {t('login_form.tagline')}
                    </Text>

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

                <form>
                    <VStack spacing={4}>
                        <Box w='100%'>
                            <FormControl>
                                <FormLabel>{t('login_form.username')}</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <FaRegUser />
                                    </InputLeftElement>
                                    <Input placeholder={t('login_form.username')} />
                                </InputGroup>
                            </FormControl>
                        </Box>
                        <Box w='100%'>
                            <FormControl>
                                <FormLabel>{t('login_form.password')}</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <FaLock />
                                    </InputLeftElement>
                                    <Input placeholder={t('login_form.password')} type='password' />
                                </InputGroup>
                            </FormControl>
                        </Box>
                        <Box w='100%'>
                            <Center>
                                <Button
                                    type='submit'
                                    colorScheme='teal'
                                >
                                    {t('login_form.login')}
                                </Button>
                            </Center>
                        </Box>
                    </VStack>
                </form>
            </CardBody>
        </Card>
    </>
}

export default LoginForm
export type { LoginFormProps }