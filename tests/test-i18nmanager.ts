import I18nManager, { BaseI18nManager } from '../src/internationalization/i18n-manager';
import { LocaleData } from '../src/internationalization/localedata';
import { BaseRepository } from '../src/repository/repository';
import I18nStrategy from '../src/internationalization/i18n-strategy';

const mock_language_en: LocaleData = { identifier: 'en' };
const mock_language_nl: LocaleData = { identifier: 'nl' };
const mock_language_de: LocaleData = { identifier: 'de' };

class WorkingStrategy implements I18nStrategy {
    getLocaleKey(): string | undefined {
        return 'en';
    }

    saveLocaleKey(key?: string): void {
        console.log(`Saving key: ${key}`);
    }

    clear(): void {
        // Nothing to do here
    }
}

class NotWorkingStrategy implements I18nStrategy {
    getLocaleKey(): string | undefined {
        return undefined;
    }

    saveLocaleKey(key?: string): void {
        console.log(`Saving key: ${key}`);
    }

    clear(): void {
        // Nothing to do here
    }
}

describe('I18nManager without initial strategy', () => {
    const my_repository = new BaseRepository<LocaleData>();
    let my_manager: I18nManager;

    beforeEach(() => {
        my_repository.add(mock_language_en, 'en');
        my_repository.add(mock_language_nl, 'nl');
        my_repository.add(mock_language_de, 'de');
        my_manager = new BaseI18nManager<LocaleData>(my_repository);
    });

    it('Retrieve the language from the working selector', () => {
        my_manager.setStrategy(new WorkingStrategy());
        my_manager.retrieveLocaleKey();
        expect(my_manager.selectedLocaleKey).toBe('en');
    });

    it('Fail back to default language', () => {
        my_manager.setStrategy(new NotWorkingStrategy());
        my_manager.setDefaultLocaleKey('de');
        my_manager.retrieveLocaleKey();
        expect(my_manager.selectedLocaleKey).toBe('de');
    });

    it('Fail if no default language is set and LanaguageSelector is faulty', () => {
        my_manager.setStrategy(new NotWorkingStrategy());
        my_manager.retrieveLocaleKey();
        expect(() => my_manager.selectedLocaleKey).toThrow();
    });
});
