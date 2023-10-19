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
import { usersApi } from './usersApi';
import popUpReducer from './slices/popUp';
import themeReducer from './slices/theme';
import authReducer from './slices/auth';

const rootReducer = combineReducers({
    [usersApi.reducerPath]: usersApi.reducer,
    popUp: popUpReducer,
    theme: themeReducer,
    auth: authReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [usersApi.reducerPath],
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
        }).concat(usersApi.middleware),
});

export const persistor = persistStore(store);
export default store;
