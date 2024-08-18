import SaticoyChakraStyle from "../saticoy-ui/themes/saticoy-style";
import { BaseRepository } from "../repository/repository";
import saticoy_theme from "../saticoy-ui/themes/saticoy";
import saticoy_roboto_slab_theme from "../saticoy-ui/themes/saticoy-roboto-slab";
import ThemeController from "../saticoy-core/theme-controller/theme-controller";
import { Theme, ThemeMode } from "../saticoy-core/theme-controller/theme";
import { BrowserRetriever, LocalPreferencesRetriever } from "../saticoy-core/theme-controller/theme-retriever";
import { eventBus } from './eventbus'
import { LocalPreferencesSaver } from "../saticoy-core/theme-controller/theme-saver";

// Repository
const themeRepo = new BaseRepository<Theme<SaticoyChakraStyle>>();
themeRepo.add(saticoy_theme, "Saticoy");
themeRepo.add(saticoy_roboto_slab_theme, "Saticoy (Roboto Slab)");

// Controller
const themeController = new ThemeController<SaticoyChakraStyle>(
    themeRepo,
    eventBus,
    [
        new LocalPreferencesRetriever("theme", "mode"),
        new BrowserRetriever(),
    ]
);
themeController.saver = new LocalPreferencesSaver("theme", "mode");
themeController.defaultMode = ThemeMode.Dark;
themeController.defaultTheme = "Saticoy";
themeController.retrieveModeAutomatically();
themeController.retrieveThemeAutomatically();

export { themeController, themeRepo };