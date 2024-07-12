import { language } from "../internationalization/language"

export type i18NextLanguage = language & {
    translation: {
        [key: string]: string | {
            [key: string]: string
        }
    }
}