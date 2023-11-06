import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { vidminnoApi } from './api';
import popUpReducer from './slices/popUp';
import themeReducer from './slices/theme';
import authReducer from './slices/auth';
import { jsApi } from './api/jsApi';
import { reactApi } from './api/reactApi';
import { usefulVideosApi } from './api/usefulVideosApi';

const rootReducer = combineReducers({
    [vidminnoApi.reducerPath]: vidminnoApi.reducer,
    // [jsApi.reducerPath]: jsApi.reducer,
    // [reactApi.reducerPath]: reactApi.reducer,
    // [usefulVideosApi.reducerPath]: usefulVideosApi.reducer,
    popUp: popUpReducer,
    theme: themeReducer,
    auth: authReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
        vidminnoApi.reducerPath,
        // jsApi.reducerPath,
        // reactApi.reducerPath,
        // usefulVideosApi.reducerPath,
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(
            vidminnoApi.middleware
            // jsApi.middleware,
            // reactApi.middleware,
            // usefulVideosApi.middleware
        ),
});

export const persistor = persistStore(store);
export default store;
