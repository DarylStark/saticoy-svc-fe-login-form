export type Style = {
    page: {
        'class': string
    },
    antd: { [key: string]: any }
}

export type Theme = {
    name: string,
    author: string,
    light: Style,
    dark: Style
} | {
    name: string,
    author: string,
    dark: Style
} | {
    name: string,
    author: string,
    light: Style
};

export type ThemeMode = 'light' | 'dark';
