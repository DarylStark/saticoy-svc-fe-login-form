import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    PinInput,
    PinInputField,
    VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next';
import { GrLogin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";


function MagicCode() {
    const { t } = useTranslation();

    return (
        <VStack spacing={4} paddingTop={4}>
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
            <Box w='100%'>
                <FormControl alignItems='center' display='flex' flexDirection='column'>
                    <FormLabel>{t('login_form.magic_code')}</FormLabel>
                    <InputGroup justifyContent='center' alignItems='center'>
                        <PinInput size='lg' otp={false} autoFocus={false} isDisabled={false} type='alphanumeric'>
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                            <PinInputField />
                        </PinInput>
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