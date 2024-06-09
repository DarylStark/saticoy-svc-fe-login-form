// Saticoy Theme
import { SaticoyAntDStyle } from './saticoy_style';
import './saticoy.scss'
import { theme } from 'antd';
import { Theme } from '../theme_manager/theme';

const saticoy_theme: Theme<SaticoyAntDStyle> = {
    name: 'Saticoy',
    author: 'Daryl Stark',
    light: {
        page: {
            'class': 'saticoy-light',
        },
        antd: {
            algorithm: theme.defaultAlgorithm,
            token: {
                motion: false
            }
        }
    },
    dark: {
        page: {
            'class': 'saticoy-dark',
        },
        antd: {
            algorithm: theme.darkAlgorithm,
            token: {
                motion: false,
                colorBgContainer: '#233044',
                colorBgElevated: '#233044'
            },
        }
    }
};

export default saticoy_theme;