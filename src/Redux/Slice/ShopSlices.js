import { createSlice } from "@reduxjs/toolkit";
import { categoryFetch } from "../../Actions/axios";
export const ShopSlice = createSlice({
    name: 'Shop',
    initialState: {
        isLoading: false,
        isError: '',
        shop: [],
        shopContainer: [],
        title: '',
        price: 0,
        description: '',
        category: '',
        length: 0
    },
    reducers: {
        fetchLoading: (state) => {
            state.isLoading = true
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false
            state.shop = action.payload.shop
            state.shopContainer = action.payload.shop
            state.length = action.payload.length
        },
        fetchError: (state) => {
            state.isError = 'Ошибка'
        },
        filterTop: (state, action) => {
            state.isLoading = false
            state.shop = state.shopContainer
            .filter(c => c.category.includes(action.payload.category))
        },
        pushTop: (state, action) => {
            state.shop = state.shopContainer.push((action.payload.data))
        }
    }
})
export const {filterTop} = ShopSlice.actions
export default ShopSlice.reducer