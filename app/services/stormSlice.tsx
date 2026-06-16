import {createSlice} from "@reduxjs/toolkit";
import {Alert, Platform} from "react-native";

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
            state.storms = state.storms.filter((item) => item?.data?.id !== action.payload.data.id);
        }
    },
})

export const { addToStorms, removeFromStorms } = stormsSlice.actions;
export default stormsSlice;