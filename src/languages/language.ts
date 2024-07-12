import { language } from "../internationalization/language"

export type i18NextLanguage = language & {
    i18next: {
        [key: string]: {
            [key: string]: string | {
                [key: string]: string
            }
        }
    }
}