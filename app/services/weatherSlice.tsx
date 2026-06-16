import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {WeatherData} from "@/app/models/WeatherData";

export const fetchWeather = createAsyncThunk(
    'fetch-weather',
    async (payload: string | WeatherData) => {
        if (typeof payload === 'string') {
            const response = await fetch(payload);
            return response.json();
        }

        return payload;
    }
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null,
        fetchStatus: ''
    },
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.data = action.payload
                state.fetchStatus = 'success';
            })
            .addCase(fetchWeather.pending,  (state) => {
                state.fetchStatus = 'loading' })
            .addCase(fetchWeather.rejected, (state => {
                state.fetchStatus = 'error'
            }))
    }
});

export default weatherSlice;

