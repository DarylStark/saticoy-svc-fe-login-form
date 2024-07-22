import { LocaleData } from "../internationalization/localedata"

export type i18NextLocaleData = LocaleData & {
    i18next: {
        [key: string]: {
            [key: string]: string | {
                [key: string]: string
            }
        }
    }
}