import { BaseRepository } from "../../saticoy-core/repository/repository";
import { BrowserRetriever, LocalPreferencesRetriever } from "../../saticoy-core/internationalization/i18n-retriever";
import { eventBus } from './eventbus'
import { LocalPreferencesSaver } from "../../saticoy-core/internationalization/i18n-saver";

import { i18NextLocaleData } from '../languages/i18next_locale_data';
import en_US from "../languages/en-US";
import nl_NL from "../languages/nl-NL";
import I18nController from "../../saticoy-core/internationalization/i18n-controller";

// Repository
const localeRepo = new BaseRepository<i18NextLocaleData>();
localeRepo.add(en_US, "en-US", ["en"]);
localeRepo.add(nl_NL, "nl-NL", ["nl"]);

// Controller
const i18nController = new I18nController<i18NextLocaleData>(
    localeRepo,
    eventBus,
    [
        new LocalPreferencesRetriever("locale"),
        new BrowserRetriever(),
    ]
);
i18nController.saver = new LocalPreferencesSaver("locale");
i18nController.defaultLocale = "en-US";
i18nController.retrieveLocaleAutomatically();

export { i18nController, localeRepo };