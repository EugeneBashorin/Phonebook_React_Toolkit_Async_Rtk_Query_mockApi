import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favoriteFilterReducer } from "./favoriteFilterSlice";
import { userFilterReducer } from "./userFilterSlice";
import { usersApi } from "./userSlice";

const rootReducer = combineReducers({
    // user
    [usersApi.reducerPath]: usersApi.reducer,   
    favoriteFilter: favoriteFilterReducer,
    userFilter: userFilterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});
