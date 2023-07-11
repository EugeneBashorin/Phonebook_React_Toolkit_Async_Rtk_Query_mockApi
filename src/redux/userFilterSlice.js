import {createSlice} from "@reduxjs/toolkit";

const initialUserFilter = {
    filterValue: "",
};

const userFilterSlice = createSlice(
    {
        name:"userFilter",
        initialState: initialUserFilter,
        reducers:{
            setValueFilter(state, action){
                state.filterValue = action.payload;
            },
        }
    }
)
export const { setValueFilter } = userFilterSlice.actions;
export const userFilterReducer = userFilterSlice.reducer;