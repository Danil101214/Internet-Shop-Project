import { createSlice } from "@reduxjs/toolkit"

export const CreateShoeSlice = createSlice({
    name: 'create',
    initialState: {
        title: '',
        price: 0,
        description: '',
        categoryId: 0,
        images: []        
    },
    reducers: {
        fetchCreateShoe: (state, action) => {
            state.title = action.payload.title
            state.price = action.payload.price
            state.description = action.payload.description
            state.categoryId = action.payload.categoryId
            state.images = action.payload.images
        }
    }
})
export default CreateShoeSlice.reducer