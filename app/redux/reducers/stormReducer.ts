import { WeatherData } from "@/app/models/WeatherData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
      addStorm: (state, action: PayloadAction<Storm>) => {
          state.storms.unshift(action.payload)
      },
      removeStorm: (state, action: PayloadAction<number>) => {
          state.storms = state.storms.filter((item) => {
              return item.id !== action.payload
          });
      },
      setStorms: (state, action: PayloadAction<Storm[]>) => {
      state.storms = action.payload;
      },
    },
})

export const { addStorm, removeStorm, setStorms } = stormsSlice.actions;
export default stormsSlice.reducer;