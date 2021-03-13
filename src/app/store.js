import { configureStore } from "@reduxjs/toolkit";
// import RootReducers from "../features";
import RootReducers from "../features/RootReducers";

const store =configureStore({
    reducer:RootReducers
});
export default store;