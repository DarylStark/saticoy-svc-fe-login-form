// Saticoy Theme with Roboto Slab font
import SaticoyChakraStyle from './saticoy-style';
import { Theme } from '../../saticoy-core/theme-controller/theme';
import OriginalSaticoyTheme from './saticoy'

// Needed fonts
import 'typeface-roboto-slab'

const saticoy_roboto_slab: Theme<SaticoyChakraStyle> = JSON.parse(JSON.stringify(OriginalSaticoyTheme));

saticoy_roboto_slab.name = 'Saticoy (Roboto Slab)';

// Overwrite the fonts
if (saticoy_roboto_slab.light) {
    saticoy_roboto_slab.light.chakra_theme.fonts = {
        body: `'Roboto Slab'`
    };
}

if (saticoy_roboto_slab.dark) {
    saticoy_roboto_slab.dark.chakra_theme.fonts = {
        body: `'Roboto Slab'`
    };
}

export default saticoy_roboto_slab;