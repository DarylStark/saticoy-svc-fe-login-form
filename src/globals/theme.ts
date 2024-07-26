import SaticoyAntDStyle from "../themes/saticoy-style";
import { BaseRepository } from "../repository/repository";
import saticoy_theme from "../themes/saticoy";
import ugly_theme from "../themes/ugly";
import ThemeController from "../theme-controller/theme-controller";
import { Theme, ThemeMode } from "../theme-controller/theme";
import { BrowserRetriever, LocalPreferencesRetriever } from "../theme-controller/theme-retriever";
import { eventBus } from './eventbus'
import { LocalPreferencesSaver } from "../theme-controller/theme-saver";

// Repository
const themeRepo = new BaseRepository<Theme<SaticoyAntDStyle>>();
themeRepo.add(saticoy_theme, "Saticoy");
themeRepo.add(ugly_theme, "Ugly");

// Controller
const themeController = new ThemeController<SaticoyAntDStyle>(
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