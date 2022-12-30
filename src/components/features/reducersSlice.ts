import { createSlice } from "@reduxjs/toolkit";

export const reducersSlice = createSlice({
    name: "reducerList",
    initialState: { reducerList: {}},
    reducers: {
        add: (state, action) => {
            state.reducerList = action.payload.trackerList;
        }
    }
});

export const { add } = reducersSlice.actions

export default reducersSlice.reducer