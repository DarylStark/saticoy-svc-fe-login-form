// type EventHandlerCallback = ((data: any, event: string) => void) | ((data: any) => void);
type EventHandlerCallback = (data: any, event: string) => void//) | ((data: any) => void);
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

    raise(event: string, data: any) {
        for (const callback of this.subscriptions[event] || []) {
            callback(data, event);
        }
    }
}

export default EventBus;