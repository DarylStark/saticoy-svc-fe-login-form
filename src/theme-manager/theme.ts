export type Style = {
    page: {
        'class': string
    },
}

export type Theme<T extends Style = Style> = {
    name: string,
    author: string,
    light: T,
    dark: T
} | {
    name: string,
    author: string,
    dark: T
} | {
    name: string,
    author: string,
    light: T
};

export type ThemeMode = 'light' | 'dark';
