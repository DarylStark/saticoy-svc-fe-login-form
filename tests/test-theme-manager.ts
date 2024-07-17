import { Theme, ThemeMode } from '../src/theme-manager/theme';
import { ManualThemeRepository } from '../src/theme-manager/theme-repository';
import ThemeManager from '../src/theme-manager/theme-manager';

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

describe('Theme Repository', () => {
    let repository: ManualThemeRepository;

    beforeEach(() => {
        repository = new ManualThemeRepository();
        repository.installTheme(MockThemeDarkLight);
        repository.installTheme(MockThemeDark);
        repository.installTheme(MockThemeLight);
    });

    it('Retrieving themes', () => {
        repository.getTheme('mock theme - dark and light');
        repository.getTheme('mock theme - dark');
        repository.getTheme('mock theme - light');
    });

    it('Retrieving non-existent theme', () => {
        expect(() => {
            repository.getTheme('non-existent theme');
        }).toThrow();
    });
});

describe('Theme Manager', () => {
    let repository: ManualThemeRepository;
    let manager: ThemeManager;

    beforeEach(() => {
        repository = new ManualThemeRepository();
        repository.installTheme(MockThemeDarkLight);
        repository.installTheme(MockThemeDark);
        repository.installTheme(MockThemeLight);
        manager = new ThemeManager(repository);
    });

    it('Get active style when non is set', () => {
        expect(() => {
            manager.getActiveStyle();
        }).toThrow();
    });

    it('Get active style after setting', () => {
        manager.activateTheme('mock theme - dark and light');
        manager.getActiveStyle();
    });

    it('Check given style after toggling', () => {
        manager.activateTheme('mock theme - dark and light');
        let style = manager.getActiveStyle();

        // Default style is dark
        expect(style).toEqual(MockThemeDarkLight.dark);

        // Toggle to light
        manager.toggleMode();
        style = manager.getActiveStyle();
        expect(style).toEqual(MockThemeDarkLight.light);

        // Toggle to dark again
        manager.toggleMode();
        style = manager.getActiveStyle();
        expect(style).toEqual(MockThemeDarkLight.dark);
    });

    it('Check given style after setting mode', () => {
        manager.activateTheme('mock theme - dark and light');
        let style = manager.getActiveStyle();

        // Toggle to light
        manager.setMode(ThemeMode.Light);
        style = manager.getActiveStyle();
        expect(style).toEqual(MockThemeDarkLight.light);

        // Toggle to dark again
        manager.setMode(ThemeMode.Dark);
        style = manager.getActiveStyle();
        expect(style).toEqual(MockThemeDarkLight.dark);
    });

    it('Check given style after setting mode', () => {
        manager.activateTheme('mock theme - dark');
        let style = manager.getActiveStyle();

        // Should still be dark
        expect(style).toEqual(MockThemeDark.dark);

        // Toggle to light, should still be dark
        manager.setMode(ThemeMode.Light);
        style = manager.getActiveStyle();
        expect(style).toEqual(MockThemeDark.dark);

        // Toggle to dark again, should still be dark
        manager.setMode(ThemeMode.Dark);
        style = manager.getActiveStyle();
        expect(style).toEqual(MockThemeDark.dark);

        // Toggle to light, go to a theme with both dark and light styles and
        // see if it changes to light
        manager.setMode(ThemeMode.Light);
        manager.activateTheme('mock theme - dark and light');
        style = manager.getActiveStyle();
        expect(style).toEqual(MockThemeDarkLight.light);
    });

    it('Check theme modes', () => {
        manager.activateTheme('mock theme - dark');
        expect(manager.hasDarkMode()).toBe(true);
        expect(manager.hasLightMode()).toBe(false);
        expect(manager.hasBothModes()).toBe(false);

        manager.activateTheme('mock theme - light');
        expect(manager.hasDarkMode()).toBe(false);
        expect(manager.hasLightMode()).toBe(true);
        expect(manager.hasBothModes()).toBe(false);

        manager.activateTheme('mock theme - dark and light');
        expect(manager.hasDarkMode()).toBe(true);
        expect(manager.hasLightMode()).toBe(true);
        expect(manager.hasBothModes()).toBe(true);
    });

    it('Register to style changes', () => {
        const mock_handler = jest.fn();
        manager.onSetStyle(mock_handler);

        manager.activateTheme('mock theme - dark and light');
        expect(mock_handler).toHaveBeenCalledTimes(1);

        manager.offSetStyle(mock_handler);

        manager.activateTheme('mock theme - dark and light');
        expect(mock_handler).toHaveBeenCalledTimes(1);
    });

    it('Register to mode changes', () => {
        const mock_handler = jest.fn();
        manager.onSetMode(mock_handler);

        manager.activateTheme('mock theme - dark and light');
        expect(mock_handler).toHaveBeenCalledTimes(1);

        manager.toggleMode();
        expect(mock_handler).toHaveBeenCalledTimes(2);

        manager.offSetMode(mock_handler);

        manager.toggleMode();
        expect(mock_handler).toHaveBeenCalledTimes(2);
    });
});