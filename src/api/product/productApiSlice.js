import { productApiRoute } from "../../constants/appConstants";
import { apiSlice } from "../base/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ type, color, brand, price }) => `${productApiRoute}/getProducts?color=${color}&brand=${brand}&priceHigh=${+price?.priceHigh}&priceLow=${+price?.priceLow}&type=${type}`
        })

    })
})
export const { useGetProductsQuery } = productApiSlice