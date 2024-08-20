/* eslint-disable @typescript-eslint/no-explicit-any */
export type EventHandlerCallback = (data: any, event: string) => void;
/* eslint-enable @typescript-eslint/no-explicit-any */

type Subscriptions = { [key: string]: EventHandlerCallback[] };

class EventBus {
    constructor(public subscriptions: Subscriptions = {}) {
    }

    on(event: string, callback: EventHandlerCallback) {
        this.subscriptions[event] = this.subscriptions[event] || [];
        if (!this.subscriptions[event].includes(callback))
            this.subscriptions[event].push(callback);
    }

    off(event: string, callback: EventHandlerCallback) {
        if (this.subscriptions[event]) {
            this.subscriptions[event] = this.subscriptions[event].filter(sub => sub !== callback);
        }
    }

    /* eslint-disable @typescript-eslint/no-explicit-any */
    raise(event: string, data: any) {
        /* eslint-enable @typescript-eslint/no-explicit-any */
        for (const callback of this.subscriptions[event] || []) {
            callback(data, event);
        }
    }
}

export default EventBus;