interface Repository<T> {
    add(item: T, name: string): void;
    remove(name: string): void;
    get(name: string): T;
    getNames(): string[];
}

class BaseRepository<T> implements Repository<T> {
    private _items: { [key: string]: T } = {};

    add(item: T, name: string): void {
        this._items[name] = item;
    }

    remove(name: string): void {
        delete this._items[name];
    }

    get(name: string): T {
        if (!this._items[name])
            throw new Error(`Item with name "${name}" is not found.`);
        return this._items[name];
    }

    getNames(): string[] {
        return Object.keys(this._items);
    }
}

export default BaseRepository;