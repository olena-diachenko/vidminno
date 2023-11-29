import { createSlice } from '@reduxjs/toolkit';

const navMenuSlice = createSlice({
    name: 'navMenu',
    initialState: {
        expand: true,
    },
    reducers: {
        setExpand: state => {
            state.expand = !state.expand;
        },
    },
});

export const { setExpand } = navMenuSlice.actions;

export default navMenuSlice.reducer;
