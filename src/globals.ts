// Globals for the application. Might be refactored into something else later.

import EventBus from "./eventbus/eventbus";
import ThemeManager from './theme-manager/theme-manager';
import { Theme } from "./theme-manager/theme";
import { SaticoyAntDStyle } from "./themes/saticoy-style";
import saticoy_theme from "./themes/saticoy";
import ugly_theme from "./themes/ugly";
import LanguageManager from "./internationalization/language-manager";

import { i18NextLocaleData } from './languages/i18next_locale_data';
import language_en_us from "./languages/en-US";
import language_nl_nl from "./languages/nl-NL";

import { i18NextLocaleData } from './languages/i18next_locale_data';

import { BaseI18nManager } from "./internationalization/i18n-manager";

import { BaseRepository } from "./repository/repository";

import i18n from "./i18n";

import { BrowserStrategy, PageArgsStrategy, LocalPreferencesStrategy, ChainedLocaleKeyStrategy } from "./internationalization/i18n-strategy";

// Event bus for global event handling
const event_bus = new EventBus();

// Themeing managers
const theme_repository = new BaseRepository<Theme<SaticoyAntDStyle>>();
const theme_manager = new ThemeManager<SaticoyAntDStyle>(theme_repository);

// Themes
theme_repository.add(saticoy_theme, "Saticoy");
theme_repository.add(ugly_theme, "Ugly");
theme_manager.activateTheme('Saticoy');

// Internationalization strategies
const browser_strategy = new BrowserStrategy();
const page_args_strategy = new PageArgsStrategy();
const local_preferences_strategy = new LocalPreferencesStrategy();
const i18n_strategy = new ChainedLocaleKeyStrategy([
    browser_strategy, page_args_strategy, local_preferences_strategy]);

// Internationalization
const language_repository = new BaseRepository<i18NextLocaleData>();
language_repository.add(language_en_us, "en-US", ["en"]);
language_repository.add(language_nl_nl, "nl-NL", ["nl"]);
const i18n_manager = new BaseI18nManager(
    language_repository, "en-US", i18n_strategy);
i18n_manager.retrieveLocaleKey();

// Exports
export { event_bus, theme_manager, theme_repository, i18n_manager, browser_strategy, local_preferences_strategy }