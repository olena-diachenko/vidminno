import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './usersApi';
import popUpReducer from './slices/popUp';
import themeReducer from './slices/theme';

const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        popUp: popUpReducer,
        theme: themeReducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;
