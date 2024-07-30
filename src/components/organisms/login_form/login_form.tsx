import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    VStack,
} from '@chakra-ui/react'
import { FaRegUser, FaLock } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

interface LoginFormProps {
    error?: string
};

function LoginForm(props: LoginFormProps) {
    const { t } = useTranslation();
    return <>
        <Card variant='outline'>
            <CardHeader>
                <Heading size='md'>{t('login_title')}</Heading>
            </CardHeader>
            <CardBody>

                {props.error &&
                    <Alert status='error'>
                        <AlertIcon />
                        {props.error}
                    </Alert>
                }
                
                <form>
                <VStack spacing={4}>
                    <Box>
                        <FormControl>
                            <FormLabel>{t('username')}</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <FaRegUser />
                                </InputLeftElement>
                                <Input placeholder={t('username')} />
                            </InputGroup>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel>{t('password')}</FormLabel>
                            <InputGroup>
                                <InputLeftElement pointerEvents='none'>
                                    <FaLock />
                                </InputLeftElement>
                                <Input placeholder={t('password')} type='password' />
                            </InputGroup>
                        </FormControl>
                    </Box>
                    <Box>
                        <Button
                            type='submit'
                            colorScheme='teal'
                        >
                            {t('login')}
                        </Button>
                    </Box>
                </VStack>
                </form>
            </CardBody>
        </Card>
    </>
}

export default LoginForm
export type {LoginFormProps}