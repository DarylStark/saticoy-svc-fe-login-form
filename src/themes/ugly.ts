// Saticoy Theme
import SaticoyChakraStyle from './saticoy-style';
import './ugly.scss'
import { Theme } from '../theme-controller/theme';

const ugly_theme: Theme<SaticoyChakraStyle> = {
    name: 'Very ugly theme',
    author: 'Daryl Stark',
    light: {
        chakra_config: {
        },
        chakra_mode: 'light',
        page: {
            'class': 'ugly-light',
        }
    }
};

export default ugly_theme;