import { createSlice } from "@reduxjs/toolkit"

const TOKEN_KEY = 'u-access'
const NAME_KEY = 'u-name'
const EMAIL_KEY = 'u-email'
const NUMBER_KEY = 'u-number'
const PASSWORD_KEY = 'u-password'
const PASSWORD_REPEAT_KEY = 'u-password_repeat'

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem(TOKEN_KEY) ?? '',
        name: localStorage.getItem(NAME_KEY) ?? '',
        email: localStorage.getItem(EMAIL_KEY) ?? '',
        password: localStorage.getItem(PASSWORD_KEY) ?? '',
        isError: '',
        isAuth: Boolean(localStorage.getItem(TOKEN_KEY))
        
    },
    reducers: {
        register: (state, action) => {
            state.token = action.payload.token
            state.name = action.payload.name
            state.email = action.payload.email
            state.password = action.payload.password
            state.isAuth = Boolean(action.payload.token)

            localStorage.setItem(NAME_KEY, action.payload.name)
            localStorage.setItem(EMAIL_KEY, action.payload.email)
            localStorage.setItem(NUMBER_KEY, action.payload.number)
            localStorage.setItem(PASSWORD_KEY, action.payload.password)
            localStorage.setItem(PASSWORD_REPEAT_KEY, action.payload.password_repeat)
            localStorage.setItem(TOKEN_KEY, action.payload.token)
        },
        logout: (state) => {
            state.token = ''
            state.name = ''
            state.email = ''
            state.number = ''
            state.password = ''
            state.password_repeat = ''
            state.isAuth = false
            
            localStorage.removeItem(NAME_KEY)
            localStorage.removeItem(EMAIL_KEY)
            localStorage.removeItem(NUMBER_KEY)
            localStorage.removeItem(PASSWORD_KEY)
            localStorage.removeItem(PASSWORD_REPEAT_KEY)
            localStorage.removeItem(TOKEN_KEY)
        },
        login: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state.password = action.payload.password
            state.isAuth = Boolean(action.payload.token)
            
            localStorage.setItem(TOKEN_KEY, action.payload.token)
            localStorage.setItem(NAME_KEY, action.payload.token)
            localStorage.setItem(EMAIL_KEY, action.payload.email)
            localStorage.setItem(PASSWORD_KEY, action.payload.password)
        }
    }
})
export default AuthSlice.reducer