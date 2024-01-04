import axios from 'axios'
import { AuthSlice } from '../Redux/Slice/AuthSlice'
import { BasketSlice } from '../Redux/Slice/BasketSlice'
import { CategorySlices } from '../Redux/Slice/CategorySlices'
import {CreateShoeSlice} from '../Redux/Slice/CreateShoeSlice'
import { ShoeSlice } from '../Redux/Slice/ShoeSlices'
import { ShopSlice } from '../Redux/Slice/ShopSlices'

export const shopFetch = (page = 1, length = 20) => {
    return async (dispatch) => {
        try {
            dispatch(ShopSlice.actions.fetchLoading())
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/`, {params: page, length})
           // const top = await axios.post('https://api.storerestapi.com/products', data)  
            console.log(response.data)
            dispatch(ShopSlice.actions.fetchSuccess({
                shop: response.data,
                length: response.data.length,
               /* title: data.title,
                price: data.price,
                description: data.description,
                category: data.category*/
            }))
         //   dispatch(ShopSlice.actions.filterTop)
        } catch (error) {
            dispatch(ShopSlice.actions.fetchError())
        }
    }
}

export const shoeFetch = (id) => {
    return async (dispatch) => {
        try {
            dispatch(ShoeSlice.actions.fetchLoadingTo())
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            console.log(response)
            dispatch(ShoeSlice.actions.fetchSuccessTo({
                shoe: response.data
            }))            
        } catch (error) {
            dispatch(ShoeSlice.actions.fetchErrorTo())
        }
    }
}

export const categoryFetch = () => {
    return async (dispatch) => {
        try {
            dispatch(CategorySlices.actions.fetchIsLoading())
            const response = await axios.get('https://api.escuelajs.co/api/v1/categories')  
            dispatch(CategorySlices.actions.fetchIsSuccess({
                category: await response.data           
            }))
        } catch (error) {
            dispatch(CategorySlices.actions.fetchIsError())
        }
    }
}

export const register = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://api.fakeshop-api.com/users/signup', data)  
            console.log(response)
            dispatch(AuthSlice.actions.register({
                email: data.email,
                password: data.password,
                name: data.name,
                token: response.data        
            }))
        } catch (error) {
            console.log(error)   //  dispatch(CategorySlices.actions.fetchIsError())
        }
    }
}

export const login = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://api.fakeshop-api.com/users/signin', data)  
            console.log(response.data.token)
            dispatch(AuthSlice.actions.login({
                email: data.email,
                password: data.password,
                name: data.name,
                token: response.data.token         
            }))
        } catch (error) {
            console.log(error)   //  dispatch(CategorySlices.actions.fetchIsError())
        }
    }
}

export const CreateShoeTop = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('https://api.escuelajs.co/api/v1/products', data)  
           // console.log(response.data.data._id)
            dispatch(CreateShoeSlice.actions.fetchCreateShoe({
                title: data.title,
                price: data.price,
                description: data.description,
                categoryId: data.categoryId,
                images: data.images
            }))
        } catch (error) {
            console.log(error)   //  dispatch(CategorySlices.actions.fetchIsError())
        }
    }
}

export const Basket = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)  
            console.log(response.data)
         //   const delete = await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
            dispatch(BasketSlice.actions.fetchIsSuccess({
                basket: await response.data
            }))
            /*dispatch(BasketSlice.actions.fetchIsDelete({
                basket: await response.data
            }))*/
        } catch (error) {
            console.log(error)   //  dispatch(CategorySlices.actions.fetchIsError())
        }
    }
}

/*export const BasketDelete = (id) => {
    return async (dispatch) => {
        try {
            const BasketDelete = await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
            dispatch(BasketSlice.actions.fetchIsDelete({
                basket: await BasketDelete.data
            }))
        } catch (error) {
            console.log(error)   //  dispatch(CategorySlices.actions.fetchIsError())
        }
    }
}*/