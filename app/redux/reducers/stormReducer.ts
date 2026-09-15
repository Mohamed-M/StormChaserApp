import { WeatherData } from "@/app/models/WeatherData";
import { createSlice } from "@reduxjs/toolkit";

export interface Storm {
  id: number,
  data: WeatherData,
  image: string
  capturedAt: string
}

interface StormsState {
  storms: Storm[]
}

const initialState: StormsState = {
  storms: []
}

const stormsSlice = createSlice({
    name: 'storms',
    initialState,
    reducers: {
        addStorm: (state, action) => {
            state.storms.unshift(action.payload)
        },
        removeStorm: (state, action) => {
            state.storms = state.storms.filter((item) => {
                return item.id !== action.payload
            });
        }
    },
})

export const { addStorm, removeStorm } = stormsSlice.actions;
export default stormsSlice.reducer;