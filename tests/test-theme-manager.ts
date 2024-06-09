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
        repository.install_theme(MockThemeDarkLight);
        repository.install_theme(MockThemeDark);
        repository.install_theme(MockThemeLight);
    });

    it('Retrieving themes', () => {
        repository.get_theme('mock theme - dark and light');
        repository.get_theme('mock theme - dark');
        repository.get_theme('mock theme - light');
    });

    it('Retrieving non-existent theme', () => {
        expect(() => {
            repository.get_theme('non-existent theme');
        }).toThrow();
    });
});

describe('Theme Manager', () => {
    let repository: ManualThemeRepository;
    let manager: ThemeManager;

    beforeEach(() => {
        repository = new ManualThemeRepository();
        repository.install_theme(MockThemeDarkLight);
        repository.install_theme(MockThemeDark);
        repository.install_theme(MockThemeLight);
        manager = new ThemeManager(repository);
    });

    it('Get active style when non is set', () => {
        expect(() => {
            manager.get_active_style();
        }).toThrow();
    });

    it('Get active style after setting', () => {
        manager.activate_theme('mock theme - dark and light');
        manager.get_active_style();
    });

    it('Check given style after toggling', () => {
        manager.activate_theme('mock theme - dark and light');
        let style = manager.get_active_style();

        // Default style is dark
        expect(style).toEqual(MockThemeDarkLight.dark);

        // Toggle to light
        manager.toggle_mode();
        style = manager.get_active_style();
        expect(style).toEqual(MockThemeDarkLight.light);

        // Toggle to dark again
        manager.toggle_mode();
        style = manager.get_active_style();
        expect(style).toEqual(MockThemeDarkLight.dark);
    });

    it('Check given style after setting mode', () => {
        manager.activate_theme('mock theme - dark and light');
        let style = manager.get_active_style();

        // Toggle to light
        manager.set_mode(ThemeMode.Light);
        style = manager.get_active_style();
        expect(style).toEqual(MockThemeDarkLight.light);

        // Toggle to dark again
        manager.set_mode(ThemeMode.Dark);
        style = manager.get_active_style();
        expect(style).toEqual(MockThemeDarkLight.dark);
    });

    it('Check given style after setting mode', () => {
        manager.activate_theme('mock theme - dark');
        let style = manager.get_active_style();

        // Should still be dark
        expect(style).toEqual(MockThemeDark.dark);

        // Toggle to light, should still be dark
        manager.set_mode(ThemeMode.Light);
        style = manager.get_active_style();
        expect(style).toEqual(MockThemeDark.dark);

        // Toggle to dark again, should still be dark
        manager.set_mode(ThemeMode.Dark);
        style = manager.get_active_style();
        expect(style).toEqual(MockThemeDark.dark);

        // Toggle to light, go to a theme with both dark and light styles and
        // see if it changes to light
        manager.set_mode(ThemeMode.Light);
        manager.activate_theme('mock theme - dark and light');
        style = manager.get_active_style();
        expect(style).toEqual(MockThemeDarkLight.light);
    });
});