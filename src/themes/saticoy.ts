// Saticoy Theme
import './saticoy.scss'
import { theme } from 'antd';
import { Theme } from '../theme_manager/theme_manager';

const saticoy_theme: Theme = {
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