import {createSlice} from "@reduxjs/toolkit";
import {statusFavoriteFilters} from "./constants";

const initialFavoriteFilterState = {
    status: statusFavoriteFilters.all,
};

const favoriteFilterSlice = createSlice(
    {
        name:"favoriteFilter",
        initialState: initialFavoriteFilterState,
        reducers:{
            setStatusFilter(state, action){
                state.status = action.payload;
            },
        }
    }
)
export const { setStatusFilter } = favoriteFilterSlice.actions;
export const favoriteFilterReducer = favoriteFilterSlice.reducer;