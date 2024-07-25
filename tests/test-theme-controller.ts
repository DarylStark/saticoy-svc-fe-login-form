import { BaseRepository } from '../src/repository/repository';
import { Theme, Style, ThemeMode } from '../src/theme-controller/theme';
import ThemeController from '../src/theme-controller/theme-controller';
import ThemeRetriever from '../src/theme-controller/theme-retriever';

class MockRetriever implements ThemeRetriever {
    constructor(private _mode?: ThemeMode, private _theme?: string) { }

    retrieveMode(): ThemeMode | undefined {
        return this._mode;
    }

    retrieveTheme(): string | undefined {
        return this._theme;
    }
}

const MockThemeDarkLight: Theme = {
    name: 'mock theme - dark and light',
    author: 'mock author',
    light: {
        page: {
            'class': 'mock-light'
        }
    },
    dark: {
        page: {
            'class': 'mock-dark'
        }
    }
}

const MockThemeDark: Theme = {
    name: 'mock theme - dark',
    author: 'mock author',
    dark: {
        page: {
            'class': 'mock-dark'
        }
    }
}

const MockThemeLight: Theme = {
    name: 'mock theme - light',
    author: 'mock author',
    light: {
        page: {
            'class': 'mock-light'
        }
    }
}

describe('Mode control', () => {
    const repository = new BaseRepository<Theme<Style>>();
    let controller: ThemeController<Style>;

    beforeEach(() => {
        controller = new ThemeController<Style>(repository);
    });

    it('No retriever, no manual mode, get the default mode', () => {
        controller.defaultMode = ThemeMode.Dark;
        expect(controller.selectedMode).toBe(ThemeMode.Dark);
    });

    it('No retriever, mode set manually, get manual mode', () => {
        controller.selectedMode = ThemeMode.Light;
        expect(controller.selectedMode).toBe(ThemeMode.Light);
    });

    it('Retriever set, no mode set manually, get value from retriever', () => {
        controller.retrievers = [new MockRetriever(ThemeMode.Light)];
        expect(controller.selectedMode).toBe(ThemeMode.Light);
    });

    it('Mulitple working retrievers set, no mode set manually, get value from first retriever', () => {
        controller.retrievers = [
            new MockRetriever(ThemeMode.Light),
            new MockRetriever(ThemeMode.Dark)
        ];
        expect(controller.selectedMode).toBe(ThemeMode.Light);
    });

    it('Mulitple retrievers set with only one working, no mode set manually, get value from second retriever', () => {
        controller.retrievers = [
            new MockRetriever(undefined),
            new MockRetriever(ThemeMode.Dark)
        ];
        expect(controller.selectedMode).toBe(ThemeMode.Dark);
    });

    it('Retriever set, mode set manually, get manual mode', () => {
        controller.retrievers = [new MockRetriever(ThemeMode.Light)];
        controller.selectedMode = ThemeMode.Dark;
        expect(controller.selectedMode).toBe(ThemeMode.Dark);
    });

    it('Failing retriever set, no mode set manually, get the default mode', () => {
        controller.defaultMode = ThemeMode.Dark;
        controller.retrievers = [new MockRetriever(undefined)];
        expect(controller.selectedMode).toBe(ThemeMode.Dark);
    });

    it('Toggle mode', () => {
        controller.selectedMode = ThemeMode.Dark;
        controller.toggleMode();
        expect(controller.selectedMode).toBe(ThemeMode.Light);
    });
});

describe('Theme control', () => {
    const repository = new BaseRepository<Theme<Style>>();
    let controller: ThemeController<Style>;

    beforeEach(() => {
        controller = new ThemeController<Style>(repository);
    });

    it('No retriever, no manual theme, get the default theme', () => {
        controller.defaultTheme = 'Saticoy';
        expect(controller.selectedTheme).toBe('Saticoy');
    });

    it('No retriever, theme set manually, get manual theme', () => {
        controller.selectedTheme = 'Testtheme';
        expect(controller.selectedTheme).toBe('Testtheme');
    });

    it('Retriever set, no theme set manually, get value from retriever', () => {
        controller.retrievers = [new MockRetriever(undefined, 'Testtheme')];
        expect(controller.selectedTheme).toBe('Testtheme');
    });

    it('Mulitple working retrievers set, no theme set manually, get value from first retriever', () => {
        controller.retrievers = [
            new MockRetriever(undefined, 'Testtheme'),
            new MockRetriever(undefined, 'Testtheme2')
        ];
        expect(controller.selectedTheme).toBe('Testtheme');
    });

    it('Mulitple retrievers set with only one working, no theme set manually, get value from second retriever', () => {
        controller.retrievers = [
            new MockRetriever(undefined, undefined),
            new MockRetriever(undefined, 'Testtheme2')
        ];
        expect(controller.selectedTheme).toBe('Testtheme2');
    });

    it('Retriever set, theme set manually, get manual theme', () => {
        controller.retrievers = [new MockRetriever(undefined, 'Testtheme')];
        controller.selectedTheme = 'Testtheme2';
        expect(controller.selectedTheme).toBe('Testtheme2');
    });

    it('Failing retriever set, no theme set manually, get the default theme', () => {
        controller.defaultTheme = 'Saticoy';
        controller.retrievers = [new MockRetriever(undefined, undefined)];
        expect(controller.selectedTheme).toBe('Saticoy');
    });
});

describe('Style retrieval', () => {
    const repository = new BaseRepository<Theme<Style>>();
    let controller: ThemeController<Style>;

    beforeEach(() => {
        controller = new ThemeController<Style>(repository);
        repository.add(MockThemeDarkLight, 'mock theme - dark and light');
        repository.add(MockThemeDark, 'mock theme - dark');
        repository.add(MockThemeLight, 'mock theme - light');
    });

    it('Mode set to Dark, get dark theme', () => {
        controller.selectedTheme = 'mock theme - dark and light';
        controller.selectedMode = ThemeMode.Dark;
        expect(controller.currentStyle).toBe(MockThemeDarkLight.dark);
    });

    it('Mode set to Light, get light theme', () => {
        controller.selectedTheme = 'mock theme - dark and light';
        controller.selectedMode = ThemeMode.Light;
        expect(controller.currentStyle).toBe(MockThemeDarkLight.light);
    });

    it('Mode set to Dark, theme with only dark mode, get dark theme', () => {
        controller.selectedTheme = 'mock theme - dark';
        controller.selectedMode = ThemeMode.Dark;
        expect(controller.currentStyle).toBe(MockThemeDark.dark);
    });

    it('Mode set to Light, theme with only light mode, get light theme', () => {
        controller.selectedTheme = 'mock theme - light';
        controller.selectedMode = ThemeMode.Light;
        expect(controller.currentStyle).toBe(MockThemeLight.light);
    });

    it('Mode set to Dark, theme with only light mode, get light theme', () => {
        controller.selectedTheme = 'mock theme - light';
        controller.selectedMode = ThemeMode.Dark;
        expect(controller.currentStyle).toBe(MockThemeLight.light);
    });

    it('Mode set to Light, theme with only dark mode, get dark theme', () => {
        controller.selectedTheme = 'mock theme - dark';
        controller.selectedMode = ThemeMode.Light;
        expect(controller.currentStyle).toBe(MockThemeDark.dark);
    });
});

describe('Theme styles', () => {
    const repository = new BaseRepository<Theme<Style>>();
    let controller: ThemeController<Style>;

    beforeEach(() => {
        controller = new ThemeController<Style>(repository);
        repository.add(MockThemeDarkLight, 'mock theme - dark and light');
        repository.add(MockThemeDark, 'mock theme - dark');
        repository.add(MockThemeLight, 'mock theme - light');
    });

    it('Both modes', () => {
        controller.selectedTheme = 'mock theme - dark and light';
        expect(controller.hasDarkStyle()).toBeTruthy();
        expect(controller.hasLightStyle()).toBeTruthy();
        expect(controller.hasBothStyles()).toBeTruthy();
    });

    it('Only dark mode', () => {
        controller.selectedTheme = 'mock theme - dark';
        expect(controller.hasDarkStyle()).toBeTruthy();
        expect(controller.hasLightStyle()).toBeFalsy();
        expect(controller.hasBothStyles()).toBeFalsy();
    });

    it('Only light mode', () => {
        controller.selectedTheme = 'mock theme - light';
        expect(controller.hasDarkStyle()).toBeFalsy();
        expect(controller.hasLightStyle()).toBeTruthy();
        expect(controller.hasBothStyles()).toBeFalsy();
    });
});