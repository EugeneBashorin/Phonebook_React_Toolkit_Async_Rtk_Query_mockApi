import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { favoriteFilterReducer } from "./favoriteFilterSlice";
import { userFilterReducer } from "./userFilterSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    user: userReducer,
    favoriteFilter: favoriteFilterReducer,
    userFilter: userFilterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer) 

export const store = configureStore({
    reducer: persistedReducer,
    // reducer: {
    //     user: userReducer,
    //     favoriteFilter: favoriteFilterReducer,
    //     userFilter: userFilterReducer,
    // }
    middleware: [thunk]
});

export const persistor = persistStore(store);