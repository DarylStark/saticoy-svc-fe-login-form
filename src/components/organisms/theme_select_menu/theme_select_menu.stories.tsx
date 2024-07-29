import ThemeSelectMenu from "./theme_select_menu";
import { BaseRepository } from "../../../repository/repository";
import { Theme, Style } from "../../../theme-controller/theme";
import ThemeController from "../../../theme-controller/theme-controller";
import EventBus from "../../../eventbus/eventbus";

// Create a Theme Repository
const themeRepo = new BaseRepository<Theme<Style>>();
themeRepo.add(
    {
        name: 'Theme 1',
        author: 'Daryl Stark',
        dark: {
            'page': {
                'class': 'dark'
            }
        },
        light: {
            'page': {
                'class': 'light'
            }
        }
    },
    "Theme 1 - Dark and light modes"
);
themeRepo.add(
    {
        name: 'Theme 2',
        author: 'Daryl Stark',
        dark: {
            'page': {
                'class': 'dark'
            }
        },
    },
    "Theme 2 - Only dark mode"
);
themeRepo.add(
    {
        name: 'Theme 3',
        author: 'Daryl Stark',
        light: {
            'page': {
                'class': 'light'
            }
        }
    },
    "Theme 3 - Only light mode"
);

// Create a Theme Controller
const themeController = new ThemeController<Style>(
    themeRepo,
    new EventBus()
);
themeController.isAutoMode = true;
themeController.isAutoTheme = true;
themeController.defaultTheme = 'Theme 1 - Dark and light modes';

// Default component
export default {
    title: 'Organisms/ThemeSelectMenu',
    component: ThemeSelectMenu,
};

const Template = () => <ThemeSelectMenu themeController={themeController} />;

export const Default = Template.bind({});
