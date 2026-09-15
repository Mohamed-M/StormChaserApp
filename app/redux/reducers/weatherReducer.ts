import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from '@/app/redux/actions/weatherActions';
import { WeatherData } from '@/app/models/WeatherData';

interface WeatherState {
  data: WeatherData,
  fetchStatus: 'success' | 'loading' | 'error'
}

const initialState: WeatherState = {
  data: {
    coord: {
        lon: 3,
        lat: 7,
    },
    main: {
        temp: 0
    },
    weather: [{
        id: 1,
        main: 'Clouds',
        description: "Clouds",
        icon: '04n',
    }],
    wind: {
        speed: 23,
        gust: 21,
    },
    name: 'Hamilton'
  },
  fetchStatus: 'loading'
}


const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.data = action.payload
                state.fetchStatus = 'success';
            })
            .addCase(fetchWeather.pending,  (state) => {
                state.fetchStatus = 'loading' 
            })
            .addCase(fetchWeather.rejected, (state => {
                state.fetchStatus = 'error'
            }))
    }
});

export default weatherSlice.reducer;
