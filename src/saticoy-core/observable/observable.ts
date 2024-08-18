import { ChangeEvent } from 'react'
import EventBus from '../eventbus/eventbus';
import { EventHandlerCallback } from '../eventbus/eventbus';

class Observable<T> {
    private event_bus: EventBus;
    private value: T;

    constructor(value: T) {
        this.event_bus = new EventBus();
        this.value = value;
    }

    onChange(callback: EventHandlerCallback) {
        this.event_bus.on('change', callback);
    }

    onSet(callback: EventHandlerCallback) {
        this.event_bus.on('set', callback);
    }

    set(value: T) {
        const previous_value = this.value;
        this.value = value;
        this.event_bus.raise('set', this.value);
        if (previous_value !== this.value)
            this.event_bus.raise('change', this.value);
    }

    get(): T {
        return this.value;
    }
}

class StringObservable extends Observable<string> {
    // Specific implementation for string observable. Contains extra methods
    // that only apply to strings.

    constructor(value: string) {
        super(value);
    }

    getInputSetter() {
        return (event: ChangeEvent<HTMLInputElement>) => this.set(event.target.value);
    }
}

export default Observable;
export { StringObservable }