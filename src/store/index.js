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
import themeReducer from './slices/theme';
import authReducer from './slices/auth';
import navMenuReducer from './slices/navMenu';

const rootReducer = combineReducers({
    [vidminnoApi.reducerPath]: vidminnoApi.reducer,
    theme: themeReducer,
    auth: authReducer,
    navMenu: navMenuReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [vidminnoApi.reducerPath],
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
        }).concat(vidminnoApi.middleware),
});

export const persistor = persistStore(store);
export default store;
