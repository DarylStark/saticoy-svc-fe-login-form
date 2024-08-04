import {
    Box,
    Button,
    FormControl,
    Input,
    InputGroup,
    InputLeftElement,
    VStack
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { GrLogin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";


function MagicCode() {
    const { t } = useTranslation();

    return (
        <VStack spacing={8} paddingTop={4}>
            <Box w='100%'>
                <FormControl>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <MdEmail />
                        </InputLeftElement>
                        <Input placeholder={t('login_form.email')} autoFocus={true} />
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

export default MagicCode