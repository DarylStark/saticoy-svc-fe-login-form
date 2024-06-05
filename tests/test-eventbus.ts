import EventBus from '../src/eventbus/eventbus';

describe('EventBus', () => {
    let event_bus: EventBus;
    let call_count: number;

    beforeEach(() => {
        event_bus = new EventBus();
        call_count = 0;
    });

    it('Adding subscribers', () => {
        const callback = (event: string, data: any) => {
            console.log(`EventBus: raising event ${event}`);
            console.log(`EventBus: data: ${data}`);
            call_count++;
        }
        event_bus.on('test_event', callback);
        expect(event_bus.subscriptions['test_event'].length).toBe(1);
    });

    it('Adding the same', () => {
        const callback = (event: string, data: any) => {
            console.log(`EventBus: raising event ${event}`);
            console.log(`EventBus: data: ${data}`);
            call_count++;
        }
        event_bus.on('test_event', callback);
        event_bus.on('test_event', callback);
        expect(event_bus.subscriptions['test_event'].length).toBe(1);
    });

    it('Deleting subscribers', () => {
        const callback = (event: string, data: any) => {
            console.log(`EventBus: raising event ${event}`);
            console.log(`EventBus: data: ${data}`);
            call_count++;
        }
        event_bus.on('test_event', callback);
        event_bus.off('test_event', callback);
        expect(event_bus.subscriptions['test_event'].length).toBe(0);
    });

    it('Raising events', () => {
        event_bus.on('test_event', (event: string, data: any) => {
            console.log(`EventBus: raising event ${event}`);
            console.log(`EventBus: data: ${data}`);
            call_count++;
        });

        event_bus.raise('test_event', 'testData');
        expect(call_count).toBe(1);
    });
});