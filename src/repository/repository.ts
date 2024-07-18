interface Repository<T> {
    add(item: T, name: string, aliasses?: string[]): void;
    remove(name: string): void;
    get(name: string): T;
    get_alias(name: string): T;
    getNames(): string[];
}

class BaseRepository<T> implements Repository<T> {
    private _items: { [key: string]: T } = {};
    private _aliasses: { [key: string]: string } = {};

    add(item: T, name: string, aliasses?: string[]): void {
        this._items[name] = item;
        if (aliasses)
            aliasses.forEach(alias => this._aliasses[alias] = name);
    }

    remove(name: string): void {
        // Delete the value from the cache
        delete this._items[name];

        // Delete aliasses
        Object.keys(this._aliasses).forEach((value, key) => {
            if (value === name)
                delete this._aliasses[key];
        });
    }

    get(name: string): T {
        if (!this._items[name]) {
            const alias = this.get_alias(name);
            if (!alias)
                throw Error(`Item with name ${name} not found in repository`);
            return alias;
        }
        return this._items[name];
    }

    get_alias(name: string): T {
        return this._items[this._aliasses[name]];
    }

    getNames(): string[] {
        return Object.keys(this._items);
    }
}

export default Repository;
export { BaseRepository };
