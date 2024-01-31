import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
    name: 'FetchStatus',
    initialState: {
        currentlyFetching: false,
        fetchDone: false, // false=pending and true=done
    },
    reducers: {
        markFetching(state) {
            state.fetchDone = true;
        },
        markFetchStarted(state) {
            state.currentlyFetching = true;
        },
        markFetchDone(state) {
            state.currentlyFetching = false;
        },

    }

});
export const FetchStatusActions = FetchStatusSlice.actions;
export default FetchStatusSlice;