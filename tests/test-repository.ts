import { BaseRepository } from '../src/repository/repository';

describe('BaseRepository', () => {
    let repository: BaseRepository<number>;

    beforeEach(() => {
        repository = new BaseRepository<number>();
    });

    it('Should add item', () => {
        repository.add(1, 'one');
        expect(repository.get('one')).toBe(1);
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
});