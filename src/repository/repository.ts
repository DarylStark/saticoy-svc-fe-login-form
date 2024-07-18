interface Repository<T> {
    add(item: T, name: string | string[]): void;
    remove(name: string): void;
    get(name: string): T;
    getNames(): string[];
}

class BaseRepository<T> implements Repository<T> {
    private _items: { [key: string]: T } = {};

    add(item: T, name: string | string[]): void {
        if (typeof name === 'string') {
            this._items[name] = item;
        } else if (Array.isArray(name)) {
            name.forEach((n) => {
                this._items[n] = item;
            });
        } else {
            throw new Error('Invalid name type. Expected string or array of strings.');
        }
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

export default Repository;
export { BaseRepository };
