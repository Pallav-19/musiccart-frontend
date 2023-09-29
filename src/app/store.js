/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "../features/notifications/notificationSlice";
import { apiSlice } from "../api/base/apiSlice";
import viewSlice from "../features/utils/viewSlice";
import cartSlice from "../features/cart/cartSlice";
import authSlice from "../features/auth/authSlice";
import filterSlice from "../features/products/filterSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        notification: notificationSlice,
        view: viewSlice,
        cart: cartSlice,
        auth: authSlice,
        filter: filterSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})