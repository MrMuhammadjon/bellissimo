import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async () => {
        const response = await axios.get('https://686bac8ee559eba908739191.mockapi.io/Products');
        return response.data; // not response.data.products
    }
);

const ProductsAuth = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'failed'
            })

    }
})



export default ProductsAuth.reducer