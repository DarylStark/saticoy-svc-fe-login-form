import { LocaleData } from "@saticoy/core"

export type i18NextLocaleData = LocaleData & {
    i18next: {
        translation: {
            [key: string]: string | {
                [key: string]: string
            }
        }
    }
}