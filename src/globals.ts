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
const language_manager = new languageManager<{ [key: string]: { [key: string]: string } }>(language_repository);
language_manager.eventBus.on('language_changed', (language) => {
    console.log(language);
});

console.log();

// Exports
export { event_bus, theme_manager, theme_repository, language_manager }