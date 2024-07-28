// Saticoy Theme
import SaticoyChakraStyle from './saticoy-style';
import './saticoy.scss'
import { Theme } from '../theme-controller/theme';

const saticoy_theme: Theme<SaticoyChakraStyle> = {
    name: 'Saticoy',
    author: 'Daryl Stark',
    light: {
        page: {
            'class': 'saticoy-light',
        },
        chakra_mode: 'light',
        chakra_config: {
            initialColorMode: 'light',
            useSystemColorMode: false
        }
    },
    dark: {
        page: {
            'class': 'saticoy-dark',
        },
        chakra_mode: 'dark',
        chakra_config: {
            initialColorMode: 'dark',
            useSystemColorMode: false
        }
    }
};

export default saticoy_theme;