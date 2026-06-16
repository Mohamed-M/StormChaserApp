import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "@/app/services/weatherSlice";
import stormsSlice from "@/app/services/stormSlice";

export const store = configureStore({
    reducer: {
        weather: weatherSlice.reducer,
        storms:  stormsSlice.reducer
    }
})

export default store;