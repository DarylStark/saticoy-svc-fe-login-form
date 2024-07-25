import { ThemeMode } from './theme';

export default interface ThemeRetriever {
    retrieveMode(): ThemeMode | undefined;
    retrieveTheme(): string | undefined;
}