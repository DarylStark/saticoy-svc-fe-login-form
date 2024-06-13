import EventBus from '../eventbus/eventbus';
import { EventHandlerCallback } from '../eventbus/eventbus';

class Observable<T> {
    private event_bus: EventBus;
    private value: T;

    constructor(value: T) {
        this.event_bus = new EventBus();
        this.value = value;
    }

    on_change(callback: EventHandlerCallback) {
        this.event_bus.on('change', callback);
    }

    on_set(callback: EventHandlerCallback) {
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

export default Observable;