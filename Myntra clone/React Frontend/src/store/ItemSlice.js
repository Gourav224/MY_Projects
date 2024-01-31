import { createSlice } from "@reduxjs/toolkit";

const ItemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addInitialItems: (state, actions) => {
            return actions.payload;
        },
    }
});
export const ItemsSliceActions = ItemsSlice.actions;
export default ItemsSlice;