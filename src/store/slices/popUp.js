import {createSlice} from "@reduxjs/toolkit";

const popUpSlice = createSlice({
    name: 'popUp',
    initialState: {
        modal: false
    },
    reducers: {
        openPopUp: (state) => {
            state.modal = true
        },

        closePopUp: (state) => {
            state.modal = false
        }
    }
})

export const { openPopUp, closePopUp } = popUpSlice.actions

export default popUpSlice.reducer