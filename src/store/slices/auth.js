import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        setCredentials: (state, { payload }) => {
            state.user = payload;
        },

        removeUser: state => {
            state.user = null;
        },
    },
});

export const { setCredentials, removeUser } = authSlice.actions;

export default authSlice.reducer;
