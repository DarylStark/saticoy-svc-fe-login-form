import { LocaleData } from "../../../internationalization/localedata";
import { BaseRepository } from "../../../repository/repository";
import I18nController from "../../../internationalization/i18n-controller";
import EventBus from "../../../eventbus/eventbus";

// Create a Locale Repository
const LocaleRepo = new BaseRepository<LocaleData>();
LocaleRepo.add(
    {
        identifier: 'en-US',
    },
    "English"
);
LocaleRepo.add(
    {
        identifier: 'nl-NL',
    },
    "Dutch"
);

// Create a Theme Controller
const i18nController = new I18nController<LocaleData>(
    LocaleRepo,
    new EventBus()
);
i18nController.isAutoLocale = true;
i18nController.defaultLocale = 'en-US';

// Default component
export default i18nController;