// Saticoy Theme
import SaticoyChakraStyle from './saticoy-style';
import { Theme } from '../theme-controller/theme';

const ugly_theme: Theme<SaticoyChakraStyle> = {
    name: 'Very ugly theme',
    author: 'Daryl Stark',
    light: {
        chakra_mode: 'light',
        chakra_theme: {
            styles:{
                global: {
                    'html, body': {
                        bg: 'lime',
                        color: 'red',
                    }
                },
            },
        }
    },
};

export default ugly_theme;