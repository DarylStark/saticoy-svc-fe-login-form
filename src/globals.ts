// Globals for the application. Might be refactored into something else later.

import EventBus from "./eventbus/eventbus";
import ThemeManager from './theme-manager/theme-manager';
import { Theme } from "./theme-manager/theme";
import { SaticoyAntDStyle } from "./themes/saticoy-style";
import saticoy_theme from "./themes/saticoy";
import ugly_theme from "./themes/ugly";
import LanguageManager from "./internationalization/language-manager";

import { i18NextLanguage } from './languages/language';
import language_en_us from "./languages/en-US";
import language_nl_nl from "./languages/nl-NL";

import { BaseRepository } from "./repository/repository";

// Event bus for global event handling
const event_bus = new EventBus();

// Themeing managers
const theme_repository = new BaseRepository<Theme<SaticoyAntDStyle>>();
const theme_manager = new ThemeManager<SaticoyAntDStyle>(theme_repository);

// Themes
theme_repository.add(saticoy_theme, "Saticoy");
theme_repository.add(ugly_theme, "Ugly");
theme_manager.activateTheme('Saticoy');

// Languages
const language_repository = new BaseRepository<i18NextLanguage>();
language_repository.add(language_en_us, "en-US");
language_repository.add(language_nl_nl, "nl-NL");
const language_manager = new LanguageManager<i18NextLanguage>(language_repository);
language_manager.setDefaultLanguage(language_en_us.languageCode);
language_manager.selectLanguage();

// Exports
export { event_bus, theme_manager, theme_repository, language_manager }