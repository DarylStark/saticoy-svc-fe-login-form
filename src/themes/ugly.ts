// Saticoy Theme

import { theme } from 'antd';
import { Theme } from '../theme_manager/theme_manager';

const ugly_theme: Theme = {
    name: 'Ugly',
    author: 'Daryl Stark',
    // light: {
    //     page: {
    //         'background': 'lime'
    //     },
    //     antd: {
    //         algorithm: theme.defaultAlgorithm,
    //         token: {
    //             motion: true,
    //             colorBgContainer: '#00ff00',
    //             colorBgElevated: '#00ff00'
    //         },
    //     }
    // },
    dark: {
        page: {
            'background': '#ff0000'
        },
        antd: {
            algorithm: theme.darkAlgorithm,
            token: {
                motion: true,
                colorBgContainer: '#ff0000',
                colorBgElevated: '#ff0000'
            },
        }
    }
};

export default ugly_theme;