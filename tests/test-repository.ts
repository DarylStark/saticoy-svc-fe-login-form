import { BaseRepository } from '../src/saticoy-core/repository/repository';

describe('BaseRepository', () => {
    let repository: BaseRepository<number>;

    beforeEach(() => {
        repository = new BaseRepository<number>();
    });

    it('Should add item', () => {
        repository.add(1, 'one');
        expect(repository.get('one')).toBe(1);
    });

    it('Should add items with aliasses', () => {
        repository.add(1, 'one', ['two', 'three']);
        expect(repository.get('one')).toBe(1);
        expect(repository.get('two')).toBe(1);
        expect(repository.get('three')).toBe(1);
    });

    it('Should remove item', () => {
        repository.add(1, 'one');
        repository.remove('one');
        expect(() => repository.get('one')).toThrow();
    });

    it('Should get all names', () => {
        repository.add(1, 'one');
        repository.add(2, 'two');
        expect(repository.getNames()).toEqual(['one', 'two']);
    });

    it('Should remove aliasses too', () => {
        repository.add(1, 'one', ['two', 'three']);
        repository.remove('one');
        expect(() => repository.get('one')).toThrow();
        expect(() => repository.get('two')).toThrow();
        expect(() => repository.get('three')).toThrow();
    });

    it('Should contain some elements', () => {
        repository.add(1, 'one');
        expect(repository.hasName('one')).toBeTruthy();
    });

    it('Should not contain some elements', () => {
        expect(repository.hasName('one')).toBeFalsy();
    });
});