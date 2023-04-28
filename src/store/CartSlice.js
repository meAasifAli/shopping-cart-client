import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
}

export const cartSlice = createSlice({
    name : "shopping-cart",
    initialState,
    reducers :{
        add : (state,action)=>{
            const item = state.cart.find((item)=> item.id === action.payload.id)
            if(item){
                item.quantity += action.payload.quantity
            }
            else{
                state.cart.push(action.payload)
            }
            
        },
        remove: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
        }, 
        increaseQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
    }
})
export const { add, remove,increaseQuantity,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;