import { configureStore } from "@reduxjs/toolkit";
import ItemsSlice from "./itemSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import BagSlice from "./BagSlice";

const store = configureStore({
    reducer: {
        items: ItemsSlice.reducer,
        fetchstatus: FetchStatusSlice.reducer,
        bag: BagSlice.reducer,
    }
});

export default store;
