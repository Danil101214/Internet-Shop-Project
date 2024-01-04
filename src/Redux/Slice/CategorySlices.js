import { createSlice } from "@reduxjs/toolkit"

export const CategorySlices = createSlice({
    name: 'category',
    initialState: {
        category: [],
        isLoading: false,
        isError: ''
    },
    reducers: {
        fetchIsLoading: (state) => {
            state.isLoading = true
        },
        fetchIsSuccess (state, action)  {
            state.isLoading = false
            state.category = action.payload.category
        },
        fetchIsError: (state) => {
            state.isError = 'Ошибка'
        },
    }
})
export const {fetchIsLoading, fetchIsSuccess, fetchIsError} = CategorySlices.actions
export default CategorySlices.reducer