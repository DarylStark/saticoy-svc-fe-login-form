import SaticoyChakraStyle from "../themes/saticoy-style";
import {
    Repository,
    ThemeController,
    Theme,
    ThemeMode,
    ThemeBrowserRetriever,
    ThemeLocalPreferencesRetriever,
    ThemeLocalPreferencesSaver
} from "@saticoy/core";
import saticoy_theme from "../themes/saticoy";
import saticoy_roboto_slab_theme from "../themes/saticoy-roboto-slab";
import { eventBus } from './eventbus'

// Repository
const themeRepo = new Repository<Theme<SaticoyChakraStyle>>();
themeRepo.add(saticoy_theme, "Saticoy");
themeRepo.add(saticoy_roboto_slab_theme, "Saticoy (Roboto Slab)");

// Controller
const themeController = new ThemeController<SaticoyChakraStyle>(
    themeRepo,
    eventBus,
    [
        new ThemeLocalPreferencesRetriever("theme", "mode"),
        new ThemeBrowserRetriever(),
    ]
);
themeController.saver = new ThemeLocalPreferencesSaver("theme", "mode");
themeController.defaultMode = ThemeMode.Dark;
themeController.defaultTheme = "Saticoy";
themeController.retrieveModeAutomatically();
themeController.retrieveThemeAutomatically();

export { themeController, themeRepo };