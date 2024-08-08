import { Style } from "../theme-controller/theme"


type ChakraTheme = {
    [key: string]: string | bool | ChakraTheme
}

type SaticoyChakraStyle = Style & {
    chakra_mode: 'light' | 'dark',
    chakra_theme: ChakraTheme
};

export default SaticoyChakraStyle;