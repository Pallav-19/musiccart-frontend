import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: { isLoading: false },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = true;
        },
        unsetLoading: (state, action) => {
            state.isLoading = false

        }
    }
})

export default loadingSlice.reducer
export const { setLoading, unsetLoading } = loadingSlice.actions
export const currentLoading = (state) => state.loading.isLoading