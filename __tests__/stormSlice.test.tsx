import stormsReducer, { addToStorms } from '@/app/services/stormSlice';

describe('stormsSlice', () => {
    it('should add a storm with image and weather data', () => {
        const initialState = { storms: [] };

        const mockStorm = {
            id: '1',
            name: 'Toronto Storm',
            image: 'file://photo.jpg',
            weather: {
                temp: 22,
                wind: 3.1,
                humidity: 80,
            },
        };

        const state = stormsReducer.reducer(initialState, addToStorms(mockStorm));

        expect(state.storms.length).toBe(1);
        expect(state.storms[0].image).toBe('file://photo.jpg');
        expect(state.storms[0].weather.temp).toBe(22);
    });
});