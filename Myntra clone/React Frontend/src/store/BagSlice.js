import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addItems: (state, actions) => {
            state.push(actions.payload);
        },
        removeItem: (state, actions) => {
            return state.filter(item => item !== actions.payload);
        }
    }
});
export const BagSliceActions = BagSlice.actions;
export default BagSlice;