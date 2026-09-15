import { RootState } from '../store';

export const selectWeather = (state: RootState) => state.weather.data;
export const selectStatus = (state: RootState) => state.weather.fetchStatus;