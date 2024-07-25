import { Style } from "../theme-manager/theme"

type SaticoyAntDStyle = Style & {
    antd: { [key: string]: any }
}

export default SaticoyAntDStyle;