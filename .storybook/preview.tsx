import React from 'react';
import type { Preview } from "@storybook/react";
// import { themeController } from '../src/globals/theme';
// import { ThemeMode } from '../src/theme-controller/theme';
import { themeController } from '../src/saticoy-ui/globals/theme';
import { ThemeMode } from '../src/saticoy-core/theme-controller/theme';
import SaticoyUI from '../src/saticoy-ui/components/saticoy-ui';

const preview: Preview = {
  decorators: [
    (Story, context) => {
      themeController.selectedTheme = context.globals.theme;
      themeController.selectedMode = context.globals.mode;
      return (
        <SaticoyUI pageTitle='Storybook preview'>
          <Story />
        </SaticoyUI>
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
