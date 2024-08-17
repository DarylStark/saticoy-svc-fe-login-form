import { Style } from "../../theme-controller/theme"


type ChakraTheme = {
    [key: string]: string | boolean | ChakraTheme
}

type SaticoyChakraStyle = Style & {
    chakra_mode: 'light' | 'dark',
    chakra_theme: ChakraTheme
};

export default SaticoyChakraStyle;