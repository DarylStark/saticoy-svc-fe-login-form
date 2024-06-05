import EventBus from '../src/eventbus/eventbus';

describe('EventBus', () => {
    let eventBus: EventBus;
    let call_count: number;

    beforeEach(() => {
        eventBus = new EventBus();
        call_count = 0;
    });

    it('Adding subscribers', () => {
        const callback = (event: string, data: any) => {
            console.log(`EventBus: raising event ${event}`);
            console.log(`EventBus: data: ${data}`);
            call_count++;
        }
        eventBus.on('test_event', callback);
        expect(eventBus.subscriptions['test_event'].length).toBe(1);
    });

    it('Adding the same', () => {
        const callback = (event: string, data: any) => {
            console.log(`EventBus: raising event ${event}`);
            console.log(`EventBus: data: ${data}`);
            call_count++;
        }
        eventBus.on('test_event', callback);
        eventBus.on('test_event', callback);
        expect(eventBus.subscriptions['test_event'].length).toBe(1);
    });

    it('Deleting subscribers', () => {
        const callback = (event: string, data: any) => {
            console.log(`EventBus: raising event ${event}`);
            console.log(`EventBus: data: ${data}`);
            call_count++;
        }
        eventBus.on('test_event', callback);
        eventBus.off('test_event', callback);
        expect(eventBus.subscriptions['test_event'].length).toBe(0);
    });

    it('Raising events', () => {
        eventBus.on('test_event', (event: string, data: any) => {
            console.log(`EventBus: raising event ${event}`);
            console.log(`EventBus: data: ${data}`);
            call_count++;
        });

        eventBus.raise('test_event', 'testData');
        expect(call_count).toBe(1);
    });
});