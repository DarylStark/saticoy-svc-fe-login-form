// Globals for the application. Might be refactored into something else later.

import EventBus from "./eventbus/eventbus";
import ThemeManager from './theme-manager/theme-manager';
import { ManualThemeRepository } from "./theme-manager/theme-repository";
import { SaticoyAntDStyle } from "./themes/saticoy-style";
import saticoy_theme from "./themes/saticoy";
import ugly_theme from "./themes/ugly";
import { manualLanguageRepository } from "./internationalization/language-repository";
import languageManager from "./internationalization/language-manager";

import language_en_us from "./languages/en-US";
import language_nl_nl from "./languages/nl-NL";
import language_en_en from "./languages/en-EN";

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
const language_repository = new manualLanguageRepository<{ [key: string]: { [key: string]: string } }>();
language_repository.install_language(language_en_us);
language_repository.install_language(language_nl_nl);
language_repository.install_language(language_en_en);
const language_manager = new languageManager<{ [key: string]: { [key: string]: string } }>(language_repository);
language_manager.set_default_language('en-US');

// Exports
export { event_bus, theme_manager, theme_repository, language_manager }