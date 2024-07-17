import Observable from '../src/observable/observable';

describe('Observable', () => {
    let my_observable: Observable<number>;

    beforeEach(() => {
        my_observable = new Observable(0);
    });

    it('Raise event on setting variable', () => {
        const callback = jest.fn();
        my_observable.onSet(callback);
        my_observable.set(1);
        expect(callback).toHaveBeenCalled();
    });

    it('Raise "change" on changing variable', () => {
        const callback = jest.fn();
        my_observable.onChange(callback);
        my_observable.set(1);
        expect(callback).toHaveBeenCalled();
    });

    it('Should not raise "change" if value is the same', () => {
        const callback = jest.fn();
        my_observable.onChange(callback);
        my_observable.set(0);
        expect(callback).not.toHaveBeenCalled();
    });

    it('Should raise "set" if value is the same', () => {
        const callback = jest.fn();
        my_observable.onSet(callback);
        my_observable.set(0);
        expect(callback).toHaveBeenCalled();
    });

    it('Should return the value', () => {
        expect(my_observable.get()).toBe(0);
    });

    it('Should set the value', () => {
        my_observable.set(1);
        expect(my_observable.get()).toBe(1);
    });
});