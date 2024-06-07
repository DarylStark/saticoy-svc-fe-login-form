// Saticoy Theme

import { theme } from 'antd';
import { Theme } from '../theme_manager/theme_manager';

const saticoy_theme: Theme = {
    name: 'Saticoy',
    author: 'Daryl Stark',
    light: {
        page: {
            'background': '#f7f9fc'
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
            'background': '#1b2635'
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