import EventBus from '../src/eventbus/eventbus';

describe('EventBus', () => {
    let eventBus: EventBus;

    beforeEach(() => {
        eventBus = new EventBus();
    });

    it('Instance type', () => {
        expect(eventBus).toBeInstanceOf(EventBus);
    });

    it('Adding subscribers', () => {
        const callback = jest.fn();
        eventBus.subscribe('testEvent', callback);

        expect(eventBus.listeners).toContainEqual({
            event: 'testEvent',
            data: callback
        });
    });
});