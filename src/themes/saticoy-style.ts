import { Style } from "../theme_manager/theme"

export type SaticoyAntDStyle = Style & {
    antd: { [key: string]: any }
}