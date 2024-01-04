import { createSlice } from "@reduxjs/toolkit";

export const ShoeSlice = createSlice({
    name: 'Shop',
    initialState: {
        isLoadingTo: false,
        isErrorTo: '',
        shoe: []
    },
    reducers: {
        fetchLoadingTo: (state) => {
            state.isLoadingTo = true
        },
        fetchSuccessTo: (state, action) => {
            state.isLoadingTo = false
            state.shoe = action.payload.shoe
        },
        fetchErrorTo: (state) => {
            state.isErrorTo = 'Ошибка'
        } 
    }
})

export default ShoeSlice.reducer