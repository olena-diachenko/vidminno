import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from "./usersApi";
import popUpReducer from './slices/popUp'

const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        popUp: popUpReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
});

export default store;