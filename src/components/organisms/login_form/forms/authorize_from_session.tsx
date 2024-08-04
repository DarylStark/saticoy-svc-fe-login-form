import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    VStack
} from '@chakra-ui/react'
import { FaRegUser } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { GrLogin } from "react-icons/gr";


function AuthorizeFromSession() {
    const { t } = useTranslation();

    return (
        <VStack spacing={8} paddingTop={4}>
            <Box w='100%'>
                <FormControl>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <FaRegUser />
                        </InputLeftElement>
                        <Input placeholder={t('login_form.username')} autoFocus={true} />
                    </InputGroup>
                </FormControl>
            </Box>
            <Box w='100%' justifyContent='center' display='flex'>
                <Button
                    type='submit'
                    colorScheme='blue'
                    rightIcon={<GrLogin />}
                >
                    {t('login_form.login')}
                </Button>
            </Box>
        </VStack>
    )
}

export default AuthorizeFromSession