import { Style } from "../theme-manager/theme"

export type SaticoyAntDStyle = Style & {
    antd: { [key: string]: any }
}