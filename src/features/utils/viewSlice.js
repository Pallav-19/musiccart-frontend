import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
    name: 'view',
    initialState: {
        viewMode: 'grid',

    },
    reducers: {
        setViewMode: (state, action) => {
            state.viewMode = action.payload
        }
    }
})

export default viewSlice.reducer
export const { setViewMode } = viewSlice.actions
export const currentViewMode = (state) => state.view.viewMode