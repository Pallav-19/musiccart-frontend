/* eslint-disable no-unused-vars */
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { logout, setCredentials } from '../../features/auth/authSlice';
import { showNotification } from '../../features/notifications/notificationSlice';
import { baseURL } from '../../constants/appConstants';
const baseQuery = fetchBaseQuery({
    baseUrl: baseURL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        headers.set('Content-Type', 'application/json')
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.originalStatus === 403) {
        const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            api.dispatch(setCredentials({ user, ...refreshResult.data }))
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logout())
            const res = await baseQuery('/auth/logout', api, extraOptions)
            api.dispatch(showNotification({ id: Date.now(), message: "Session Expired! Login Again!", severity: 'info' }))
        }
    }
    return result
}
export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})