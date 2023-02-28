import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { MODE } from "../constant/Variables";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

// Import Reducers :
import Auth from './Auth/Reducer';
import News from './News/Reducer';
import Interests from "./Interests/Reducer";
import Loader from "./Loader/Reducer";
import Error from "./Errors/Reducer";

const combineReducer = combineReducers({
    auth: Auth,
    news: News,
    interests: Interests,
    loader: Loader,
    error: Error
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, combineReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: MODE !== 'production',
    // middleware: [thunk]
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export const persistor = persistStore(store)
