// Saticoy Theme with Roboto Slab font
import SaticoyChakraStyle from './saticoy-style';
import { Theme } from '../theme-controller/theme';
import OriginalSaticoyTheme from './saticoy'

const saticoy_roboto_slab: Theme<SaticoyChakraStyle> = JSON.parse(JSON.stringify(OriginalSaticoyTheme));

saticoy_roboto_slab.name = 'Saticoy (Roboto Slab)';

// Overwrite the fonts
saticoy_roboto_slab.light.chakra_theme.fonts = {
    body: `'Roboto Slab'`
};
saticoy_roboto_slab.dark.chakra_theme.fonts = {
    body: `'Roboto Slab'`
};

export default saticoy_roboto_slab;