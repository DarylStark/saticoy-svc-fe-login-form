import { Theme } from '../src/theme_manager/theme';
import { ManualThemeRepository } from '../src/theme_manager/theme-repository';

const MockTheme: Theme = {
    name: 'mock theme',
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

describe('Theme Repository', () => {
    let repository: ManualThemeRepository;

    beforeEach(() => {
        repository = new ManualThemeRepository();
        repository.install_theme(MockTheme);
    });

    it('Retrieving themes', () => {
        repository.get_theme('mock theme');
    });
});