import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: localStorage.getItem('theme') || 'light',
    },
    reducers: {
        changeTheme: state => {
            state.theme === 'light'
                ? (state.theme = 'dark')
                : (state.theme = 'light');
            localStorage.setItem('theme', state.theme);
        },
    },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
