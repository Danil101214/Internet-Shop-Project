import { configureStore } from "@reduxjs/toolkit"
import CategorySlices from "./Slice/CategorySlices"
import  ShoeSlice  from "./Slice/ShoeSlices"
import ShopSlice from './Slice/ShopSlices'
import AuthSlice from "./Slice/AuthSlice"
import CreateShoeSlice from "./Slice/CreateShoeSlice"
import BasketSlice from "./Slice/BasketSlice"
const store = configureStore({
    reducer: {
        Shop: ShopSlice,
        ShoeTop: ShoeSlice,
        Category: CategorySlices,
        Auth: AuthSlice,
        CreateShoe: CreateShoeSlice,
        Basket: BasketSlice
    }
})

export default store