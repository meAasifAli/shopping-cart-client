import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})


const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        setProducts: (state, action) => {
            state.data = action.payload
        }
        , setStatus: (state, action) => {
            state.status = action.payload;
        }
    }
    , extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = STATUSES.LOADING
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {

                state.data = action.payload
                state.status = STATUSES.IDLE
            })
            .addCase(fetchProducts.rejected,(state)=>{
                state.status = STATUSES.ERROR
            })
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer

//Thunks

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products")
    return data
});