// // Themeing managers
// const theme_repository = new BaseRepository<Theme<SaticoyAntDStyle>>();

// // Theme strategy
// const localPreferencesStrategy = new ThemeLocalPreferencesStrategy();
// const browserStrategy = new ThemeBrowserStrategy();

// const theme_manager = new ThemeManager<SaticoyAntDStyle>(theme_repository, browserStrategy);

// // Themes
// theme_repository.add(saticoy_theme, "Saticoy");
// theme_repository.add(ugly_theme, "Ugly");
// theme_manager.activateTheme('Saticoy');

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
//     theme_manager.getActiveMode();
//     console.log('Theme changed to', theme_manager.selectedMode);
// });

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

window.tc = themeController;

export { themeController, themeRepo };