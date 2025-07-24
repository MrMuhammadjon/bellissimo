import { configureStore } from "@reduxjs/toolkit";
import authReduser from '../Feauters/auth/authSlice';
import productAuth from '..//Feauters/products/ProductsAuth'


export const store = configureStore({
    reducer: {
        auth: authReduser,
        products: productAuth
    }
})