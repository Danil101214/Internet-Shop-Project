import { createSlice } from "@reduxjs/toolkit"
const BASKET_KEY = 'u-basket'
export const BasketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket:  [],
        isLoading: false,
        isError: ''
    },
    reducers: {
        fetchIsLoading: (state) => {
            state.isLoading = true
        },
        fetchIsSuccess: (state, action) => {
            state.isLoading = false
            state.basket.push(action.payload.basket)
        },
        fetchIsDelete: (state, action) => {
            state.basket = state.basket.filter(basket => basket.id !== action.payload.basket)
        },
        fetchIsError: (state) => {
            state.isError = 'Ошибка'
        },
    }
})
export default BasketSlice.reducer