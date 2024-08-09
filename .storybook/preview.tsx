import React from 'react';
import type { Preview } from "@storybook/react";
import { themeController } from '../src/globals/theme';
import { ThemeMode } from '../src/theme-controller/theme';
import { ChakraProvider, ColorModeProvider, extendTheme } from '@chakra-ui/react';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      themeController.selectedTheme = context.globals.theme;
      themeController.selectedMode = context.globals.mode;
      return (
        <ChakraProvider theme={extendTheme(themeController.currentStyle?.chakra_theme || {})}>
          <ColorModeProvider value={themeController.currentStyle?.chakra_mode}>
            <Story />
          </ColorModeProvider>
        </ChakraProvider >
      );
    }
    ,
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true, // Disable the backgrounds toolbar
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Theme for the components',
      defaultValue: 'Saticoy',
      toolbar: {
        icon: 'paintbrush',
        items: themeController.themeRepository.getNames(true)
      },
    },
    mode: {
      name: 'Mode',
      description: 'Mode for the team',
      defaultValue: ThemeMode.Dark,
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: ThemeMode.Dark, title: 'Dark' },
          { value: ThemeMode.Light, title: 'Light' }
        ],
      },
    }
  }
};


export default preview;
