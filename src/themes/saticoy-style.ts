import { Style } from "../theme-controller/theme"

type SaticoyChakraStyle = Style & {
    chakra_mode: 'light' | 'dark',
    chakra_config: {
        [key: string]: string | boolean
    }
};

export default SaticoyChakraStyle;