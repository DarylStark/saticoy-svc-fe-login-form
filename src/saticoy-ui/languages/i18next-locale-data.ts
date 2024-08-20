import { LocaleData } from "../../saticoy-core/internationalization/localedata"

export type stringDict = {
    [key: string]: string | stringDict
}

export type i18NextLocaleData = LocaleData & {
    i18next: {
        translation: {
            [key: string]: string | {
                [key: string]: string
            }
        }
    }
}