import { Language } from "../internationalization/language"

export type i18NextLanguage = Language & {
    i18next: {
        [key: string]: {
            [key: string]: string | {
                [key: string]: string
            }
        }
    }
}