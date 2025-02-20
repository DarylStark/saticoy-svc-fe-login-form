import {
    Box,
    Button,
    FormControl,
    Input,
    InputGroup,
    InputLeftElement,
    VStack,
} from '@chakra-ui/react';
import { FaRegUser } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { GrLogin } from 'react-icons/gr';
import { FormEvent } from 'react';

interface AuthorizeFromSessionProps {
    onSubmit?: (e: FormEvent) => void;
}

function AuthorizeFromSession(props: AuthorizeFromSessionProps) {
    const { t } = useTranslation();

    return (
        <form onSubmit={props.onSubmit}>
            <VStack
                spacing={4}
                paddingTop={4}>
                <Box w='100%'>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <FaRegUser />
                            </InputLeftElement>
                            <Input
                                placeholder={t('login_form.username')}
                                autoFocus={true}
                            />
                        </InputGroup>
                    </FormControl>
                </Box>
                <Box
                    w='100%'
                    justifyContent='center'
                    display='flex'>
                    <Button
                        type='submit'
                        colorScheme='blue'
                        rightIcon={<GrLogin />}>
                        {t('login_form.login')}
                    </Button>
                </Box>
            </VStack>
        </form>
    );
}

export default AuthorizeFromSession;
export type { AuthorizeFromSessionProps };
