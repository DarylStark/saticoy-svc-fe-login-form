import { Style } from "@saticoy/core"


type ChakraTheme = {
    [key: string]: string | boolean | ChakraTheme
}

type SaticoyChakraStyle = Style & {
    chakra_mode: 'light' | 'dark',
    chakra_theme: ChakraTheme
};

export default SaticoyChakraStyle;