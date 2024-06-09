// Globals for the application. Might be refactored into something else later.

import EventBus from "./eventbus/eventbus";
import ThemeManager from './theme_manager/theme-manager';
import { ManualThemeRepository } from "./theme_manager/theme-repository";
import { AntDStyle } from "./theme_manager/theme";
import saticoy_theme from "./themes/saticoy";

// Event bus for global event handling
const event_bus = new EventBus();

// Themeing managers
const theme_repository = new ManualThemeRepository<AntDStyle>();
const theme_manager = new ThemeManager<AntDStyle>(theme_repository);

// Themes
theme_repository.install_theme(saticoy_theme);
theme_manager.activate_theme('Saticoy');

// Exports
export { event_bus, theme_manager, theme_repository }