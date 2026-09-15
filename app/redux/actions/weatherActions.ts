import { WeatherData } from "@/app/models/WeatherData";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk<WeatherData, string>(
  "weather/fetchWeather",
  async (url, thunkAPI) => {
    try {

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch weather");
      }

      return response.json();
    } catch(error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);