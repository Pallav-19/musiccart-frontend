import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        allCartData: [],
        total: ''
    },
    reducers: {
        setCart: (state, action) => {
            state.allCartData = action.payload.allCartData
            state.total = action.payload.total
        }
    }
})

export default cartSlice.reducer
export const { setCart } = cartSlice.actions
export const currentCart = (state) => state.cart.allCartData
export const currentTotal = (state) => state.cart.total