// Globals for the application. Might be refactored into something else later.

import EventBus from "./eventbus/eventbus";
import { ThemeRepository, ThemeManager } from './theme_manager/theme_manager';

export const event_bus = new EventBus();
export const theme_repository = new ThemeRepository();
export const theme_manager = new ThemeManager(theme_repository);
