import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async () => {
        const response = await axios.get('https://dummyjson.com/recipes');
        return response.data.recipes; // not response.data.products
    }
);

const ProductsAuth = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
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