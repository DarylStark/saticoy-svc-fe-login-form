import { Card, CardBody, CardHeader, Heading, Button, Input, InputGroup, InputLeftElement, FormControl, FormLabel } from '@chakra-ui/react'
import { FaRegUser, FaLock } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import './login_form.scss'

function LoginForm() {
    const { t } = useTranslation();
    return <>
        <Card variant='outline' className='card'>
            <CardHeader>
                <Heading size='md'>{t('login_title')}</Heading>
            </CardHeader>
            <CardBody>
                <p>{t('tagline')}</p>
                <form>
                    <FormControl>
                        <FormLabel>{t('username')}</FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <FaRegUser />
                            </InputLeftElement>
                            <Input placeholder={t('username')} />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel>{t('password')}</FormLabel>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <FaLock />
                            </InputLeftElement>
                            <Input placeholder={t('password')} type='password' />
                        </InputGroup>
                    </FormControl>
                    <Button
                        type='submit'
                        colorScheme='teal'
                    >
                        {t('login')}
                    </Button>
                </form>
            </CardBody>
        </Card>
    </>
}

export default LoginForm