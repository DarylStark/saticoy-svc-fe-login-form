// Globals for the application. Might be refactored into something else later.

import EventBus from "./eventbus/eventbus";
import ThemeManager from './theme-manager/theme-manager';
import { ManualThemeRepository } from "./theme-manager/theme-repository";
import { SaticoyAntDStyle } from "./themes/saticoy-style";
import saticoy_theme from "./themes/saticoy";
import ugly_theme from "./themes/ugly";
import { ManualLanguageRepository } from "./internationalization/language-repository";
import LanguageManager from "./internationalization/language-manager";

import { i18NextLanguage } from './languages/language';
import language_en_us from "./languages/en-US";
import language_nl_nl from "./languages/nl-NL";

// Event bus for global event handling
const event_bus = new EventBus();

// Themeing managers
const theme_repository = new ManualThemeRepository<SaticoyAntDStyle>();
const theme_manager = new ThemeManager<SaticoyAntDStyle>(theme_repository);

// Themes
theme_repository.install_theme(saticoy_theme);
theme_repository.install_theme(ugly_theme);
theme_manager.activate_theme('Saticoy');

// Languages
const language_repository = new ManualLanguageRepository<i18NextLanguage>();
language_repository.installLanguage(language_en_us);
language_repository.installLanguage(language_nl_nl);
const language_manager = new LanguageManager<i18NextLanguage>(language_repository);
language_manager.setDefaultLanguage(language_en_us.languageCode);
language_manager.selectLanguage();

// Exports
export { event_bus, theme_manager, theme_repository, language_manager }