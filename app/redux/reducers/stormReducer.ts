import { createSlice } from "@reduxjs/toolkit";

const stormsSlice = createSlice({
    name: 'storms',
    initialState: {
        storms: []
    },
    reducers: {
        addStorm: (state, action) => {
            state.storms.unshift(action.payload)
        },
        removeStorm: (state, action) => {
            state.storms = state.storms.filter((item) => {
                return item.id !== action.payload.id
            });
        }
    },
})

export const { addStorm, removeStorm } = stormsSlice.actions;
export default stormsSlice.reducer;