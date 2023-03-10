import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
    name: "fname",
    initialState: { fname: "kavishka"},
    reducers: {
        comb: state => {
            state.fname = state.fname + " Hi";
        }
    }
});

export const { comb } = nameSlice.actions

export default nameSlice.reducer