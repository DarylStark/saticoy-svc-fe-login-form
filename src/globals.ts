// Globals for the application. Might be refactored into something else later.

import EventBus from "./eventbus/eventbus";
import ThemeManager from './theme-manager/theme-manager';
import { ManualThemeRepository } from "./theme-manager/theme-repository";
import { SaticoyAntDStyle } from "./themes/saticoy-style";
import saticoy_theme from "./themes/saticoy";
import ugly_theme from "./themes/ugly";

// Event bus for global event handling
const event_bus = new EventBus();

// Themeing managers
const theme_repository = new ManualThemeRepository<SaticoyAntDStyle>();
const theme_manager = new ThemeManager<SaticoyAntDStyle>(theme_repository);

// Themes
theme_repository.install_theme(saticoy_theme);
theme_repository.install_theme(ugly_theme);
theme_manager.activate_theme('Saticoy');

// Exports
export { event_bus, theme_manager, theme_repository }