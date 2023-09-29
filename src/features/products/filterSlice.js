import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        type: '',
        brand: '',
        color: '',
        price: {},
    },
    reducers: {
        setFilter: (state, action) => {
            state.type = action.payload.type
            state.brand = action.payload.brand
            state.color = action.payload.color
            state.price = action.payload.price
        }
    }
})

export default filterSlice.reducer
export const { setFilter } = filterSlice.actions
export const currentFilters = (state) => state.filter