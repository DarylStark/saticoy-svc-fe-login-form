import React from 'react';
import type { Preview } from '@storybook/react';
import { themeController, i18nController } from '@saticoy/ui';
import { ThemeMode } from '@saticoy/core';
import SaticoyUI from '@saticoy/ui';

import { extendLanguage } from '@saticoy/ui';

import en_US from '../src/locales/en-US';
import nl_NL from '../src/locales/nl-NL';

// Import fonts. We need to do this to make sure the fonts are loaded before
// the app is rendered.
import 'typeface-roboto-slab/index.css';
import 'typeface-inter/inter.css';

// Extend the languages
extendLanguage('en-US', en_US);
extendLanguage('nl-NL', nl_NL);

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
        },
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
                items: themeController.themeRepository.getNames(true),
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
                    { value: ThemeMode.Light, title: 'Light' },
                ],
            },
        },
    },
};

export default preview;
