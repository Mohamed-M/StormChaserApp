import { WeatherData } from "@/app/models/WeatherData";
import { createAsyncThunk } from '@reduxjs/toolkit';

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
