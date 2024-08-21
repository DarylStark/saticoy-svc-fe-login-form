import React from 'react'

// Generic interfaces
import I18nController from "../saticoy-core/internationalization/i18n-controller";
import ThemeController from "../saticoy-core/theme-controller/theme-controller";

// Implementationss
import { i18NextLocaleData } from './locales/i18next-locale-data';
import SaticoyChakraStyle from "./themes/saticoy-style";

// Objects
import { themeController } from './globals/theme';
import { i18nController } from './globals/i18n';

// Props for this Context
interface SaticoyUIContextProps {
    themeController: ThemeController<SaticoyChakraStyle>;
    i18nController: I18nController<i18NextLocaleData>;
}

// The context itself
export const SaticoyUIContext = React.createContext<SaticoyUIContextProps>({
    themeController: themeController,
    i18nController: i18nController,
});

export default SaticoyUIContext;
export type { SaticoyUIContextProps };