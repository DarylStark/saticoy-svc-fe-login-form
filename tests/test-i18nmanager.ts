import I18nManager, { BaseI18nManager } from '../src/internationalization/i18n-manager';
import { Language } from '../src/internationalization/language';
import { BaseRepository } from '../src/repository/repository';
import I18nStrategy from '../src/internationalization/i18n-strategy';

const mock_language_en: Language = { languageCode: 'en' };
const mock_language_nl: Language = { languageCode: 'nl' };
const mock_language_de: Language = { languageCode: 'de' };

class WorkingLanguageSelector implements I18nStrategy {
    getLanguage(): string | undefined {
        return 'en';
    }
}

class NotWorkingLanguageSelector implements I18nStrategy {
    getLanguage(): string | undefined {
        return undefined;
    }
}

describe('I18nManager without initial LanguageManager', () => {
    const my_repository = new BaseRepository<Language>();
    let my_manager: I18nManager;

    beforeEach(() => {
        my_repository.add(mock_language_en, 'en');
        my_repository.add(mock_language_nl, 'nl');
        my_repository.add(mock_language_de, 'de');
        my_manager = new BaseI18nManager<Language>(my_repository);
    });

    it('Retrieve the language from the working selector', () => {
        my_manager.setStrategy(new WorkingLanguageSelector());
        my_manager.retrieveLanguage();
        expect(my_manager.selectedLanguage).toBe('en');
    });

    it('Fail back to default language', () => {
        my_manager.setStrategy(new NotWorkingLanguageSelector());
        my_manager.setDefaultLanguage('de');
        my_manager.retrieveLanguage();
        expect(my_manager.selectedLanguage).toBe('de');
    });

    it('Fail if no default language is set and LanaguageSelector is faulty', () => {
        my_manager.setStrategy(new NotWorkingLanguageSelector());
        my_manager.retrieveLanguage();
        expect(() => my_manager.selectedLanguage).toThrow();
    });
});
