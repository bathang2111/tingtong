import { createSlice } from "@reduxjs/toolkit";

const Calender=createSlice({
    name:"calender",
    initialState:{isOpen:false},
    reducers:{
        ToggleCalender:(state)=>{
            state.isOpen=!state.isOpen;
            return state;
        }
    }
})

const {reducer, actions}=Calender;
export const {ToggleCalender}=actions;
export default reducer;