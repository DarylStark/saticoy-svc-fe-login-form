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
        }
    },
    dark: {
        page: {
            'class': 'saticoy-dark',
        }
    }
};

export default saticoy_theme;