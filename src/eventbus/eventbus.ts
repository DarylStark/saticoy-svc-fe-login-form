interface Event {
    event: string;
    data: any;
}

class EventBus {
    constructor(public listeners: Event[] = []) {
    }

    subscribe(event: string, callback: (data: any) => void) {
        this.listeners.push({
            event,
            data: callback
        });
    }
}

export default EventBus;