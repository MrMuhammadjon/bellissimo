import { configureStore } from "@reduxjs/toolkit";
import authReduser from '../Feauters/auth/authSlice'


export const store = configureStore({
    reducer: {
        auth: authReduser
    }
})