// Saticoy Theme
import { background, defineStyleConfig } from '@chakra-ui/react'
import SaticoyChakraStyle from './saticoy-style';
import { Theme } from '../theme-controller/theme';

const components = {
    Heading: {
        baseStyle: {
            fontFamily: 'inherit'
        }
    }
}

const saticoy_theme: Theme<SaticoyChakraStyle> = {
    name: 'Saticoy',
    author: 'Daryl Stark',
    light: {
        chakra_mode: 'light',
        chakra_theme: {
            styles: {
                global: {
                    'html, body': {
                        bg: 'rgb(247, 249, 252)',
                        color: 'black',
                    }
                },
            },
            components: components
        }
    },
    dark: {
        chakra_mode: 'dark',
        chakra_theme: {
            styles: {
                global: {
                    'html, body': {
                        bg: 'rgb(27, 38, 53)',
                        color: 'white',
                    }
                },
            },
            components: components
        }
    }
};

export default saticoy_theme;