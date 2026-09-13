import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from '@/app/redux/actions/weatherActions';

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

export default weatherSlice.reducer;
