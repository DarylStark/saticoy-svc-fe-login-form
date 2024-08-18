import { LocaleData } from "../internationalization/localedata"

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