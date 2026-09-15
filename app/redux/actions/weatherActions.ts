import { WeatherData } from "@/app/models/WeatherData";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk<WeatherData, string>(
  "weather/fetchWeather",
  async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch weather");
    }

    return response.json();
  }
);