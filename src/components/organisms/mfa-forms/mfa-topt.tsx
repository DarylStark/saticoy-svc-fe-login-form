import {
    Box,
    Button,
    FormControl,
    Center,
    VStack,
    PinInput,
    PinInputField,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { GrLogin } from 'react-icons/gr';
import { FormEvent } from 'react';

interface MFATOTPProps {
    onSubmit?: (e: FormEvent) => void;
}

function MFATOTPForm(props: MFATOTPProps) {
    const { t } = useTranslation();

    return (
        <form onSubmit={props.onSubmit}>
            <VStack
                spacing={4}
                paddingTop={4}>
                <Box w='100%'>
                    <FormControl>
                        <Center>
                            <PinInput
                                size='lg'
                                otp={true}
                                autoFocus={true}>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </Center>
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

export default MFATOTPForm;
