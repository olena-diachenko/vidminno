import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light',
    },
    reducers: {
        changeTheme: state => {
            state.theme === 'light'
                ? (state.theme = 'dark')
                : (state.theme = 'light');
        },
    },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
