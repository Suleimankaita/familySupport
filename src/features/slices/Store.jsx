import { configureStore } from "@reduxjs/toolkit";
import FunctionSlice from "./FunctionSlice";
export const store=configureStore({
    reducer:{
        FunctionSlice,
    }
})