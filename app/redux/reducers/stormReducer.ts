import { createSlice } from "@reduxjs/toolkit";

const stormsSlice = createSlice({
    name: 'storms',
    initialState: {
        storms: []
    },
    reducers: {
        addToStorms: (state, action) => {
            state.storms.unshift(action.payload)
        },
        removeFromStorms: (state, action) => {
            state.storms = state.storms.filter((item) => {
                return item.id !== action.payload.id
            });
        }
    },
})

export const { addToStorms, removeFromStorms } = stormsSlice.actions;
export default stormsSlice.reducer;