import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
    Route:null
}

const funcsice=createSlice({
    initialState,
    name:"FunctionSlice",
    reducers:{
        SetRoute:(state,action)=>{
            state.Route=action.payload
        }
    },
})

const {SetRoute}=funcsice.actions

export const GetRoute=(state)=>state.FunctionSlice.Route;

export default funcsice.reducer