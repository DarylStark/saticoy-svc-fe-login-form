// Saticoy Theme
import { SaticoyAntDStyle } from './saticoy-style';
import './ugly.scss'
import { theme } from 'antd';
import { Theme } from '../theme-controller/theme';

const ugly_theme: Theme<SaticoyAntDStyle> = {
    name: 'Very ugly theme',
    author: 'Daryl Stark',
    light: {
        page: {
            'class': 'ugly-light',
        },
        antd: {
            algorithm: theme.defaultAlgorithm,
            token: {
                motion: true
            }
        }
    }
};

export default ugly_theme;