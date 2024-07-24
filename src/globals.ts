// Globals for the application. Might be refactored into something else later.

import EventBus from "./eventbus/eventbus";
import ThemeManager from './theme-manager/theme-manager';
import { Theme } from "./theme-manager/theme";
import { SaticoyAntDStyle } from "./themes/saticoy-style";
import saticoy_theme from "./themes/saticoy";
import ugly_theme from "./themes/ugly";

import { i18NextLocaleData } from './languages/i18next_locale_data';
import language_en_us from "./languages/en-US";
import language_nl_nl from "./languages/nl-NL";

import { BaseI18nManager } from "./internationalization/i18n-manager";

import { BaseRepository } from "./repository/repository";

import { BrowserStrategy, PageArgsStrategy, LocalPreferencesStrategy, ChainedLocaleKeyStrategy } from "./internationalization/i18n-strategy";
import { BrowserStrategy as ThemeBrowserStrategy, LocalPreferencesStrategy as ThemeLocalPreferencesStrategy } from "./theme-manager/theme-mode-strategy";

// Event bus for global event handling
const event_bus = new EventBus();

// Themeing managers
const theme_repository = new BaseRepository<Theme<SaticoyAntDStyle>>();

// Theme strategy
const localPreferencesStrategy = new ThemeLocalPreferencesStrategy();
const browserStrategy = new ThemeBrowserStrategy();

const theme_manager = new ThemeManager<SaticoyAntDStyle>(theme_repository, browserStrategy);

// Themes
theme_repository.add(saticoy_theme, "Saticoy");
theme_repository.add(ugly_theme, "Ugly");
theme_manager.activateTheme('Saticoy');

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    theme_manager.getActiveMode();
    console.log('Theme changed to', theme_manager.selectedMode);
});

// Internationalization repository
const language_repository = new BaseRepository<i18NextLocaleData>();
language_repository.add(language_en_us, "en-US", ["en"]);
language_repository.add(language_nl_nl, "nl-NL", ["nl"]);

// Internationalization strategies
const browser_strategy = new BrowserStrategy(language_repository.getNames(true));
const page_args_strategy = new PageArgsStrategy();
const local_preferences_strategy = new LocalPreferencesStrategy();
const i18n_strategy = new ChainedLocaleKeyStrategy([
    page_args_strategy, local_preferences_strategy, browser_strategy]);

// Internationalization controller
const i18n_manager = new BaseI18nManager(
    language_repository, "en-US", i18n_strategy);
i18n_manager.retrieveLocaleKey();

// Exports
export { event_bus, theme_manager, theme_repository, i18n_manager, browser_strategy, local_preferences_strategy }