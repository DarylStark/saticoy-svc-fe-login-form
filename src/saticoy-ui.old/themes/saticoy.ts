// Saticoy Theme
import { extendBaseTheme } from '@chakra-ui/react'
import SaticoyChakraStyle from './saticoy-style';
import { Theme } from '@saticoy/core';
import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

// Needed fonts
import 'typeface-inter'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys)

const fonts = {
    body: `'Inter'`,
}

const components = {
    Heading: {
        baseStyle: {
            fontFamily: 'inherit',
        }
    },
    PinInput: {
        baseStyle: {
            _placeholder: {
                fontFamily: 'auto',
            }
        }
    },
    Card: defineMultiStyleConfig({
        sizes: {
            dialog: definePartsStyle({
                container: {
                    width: '400px',
                    maxWidth: '100%',
                    borderRadius: '0'
                },
                header: {
                    padding: '20px',
                    paddingBottom: '0'
                },
                body: {
                    padding: '20px'
                },
                footer: {
                    padding: '20px'

                }
            })
        }
    }),
}

const saticoy_theme: Theme<SaticoyChakraStyle> = {
    name: 'Saticoy',
    author: 'Daryl Stark',
    light: {
        chakra_mode: 'light',
        chakra_theme: {
            styles: {
                global: {
                    'html, body': {
                        bg: 'rgb(247, 249, 252)',
                        color: '#555',
                        fontSize: '16px',
                        padding: '0px'
                    }
                },
            },
            fonts: fonts,
            components: extendBaseTheme(components)
        }
    },
    dark: {
        chakra_mode: 'dark',
        chakra_theme: {
            styles: {
                global: {
                    'html, body': {
                        bg: 'rgb(27, 38, 53)',
                        color: 'white',
                        fontSize: '16px',
                        padding: '0px',
                    }
                },
            },
            fonts: fonts,
            components: extendBaseTheme(components)
        }
    }
};

export default saticoy_theme;