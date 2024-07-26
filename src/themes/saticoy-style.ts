import { Style } from "../theme-controller/theme"

type SaticoyAntDStyle = Style & {
    antd: { [key: string]: any }
}

export default SaticoyAntDStyle;