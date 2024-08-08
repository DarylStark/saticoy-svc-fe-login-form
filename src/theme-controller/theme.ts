export type Style = Record<string, never>

export type Theme<T extends Style = Style> = {
    name: string,
    author: string,
    light?: T,
    dark?: T
};

export enum ThemeMode {
    Light = 'light',
    Dark = 'dark'
}
