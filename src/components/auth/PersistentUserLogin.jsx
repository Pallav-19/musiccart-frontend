/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useRefreshMutation } from "../../app/api/auth/authApiSlice"
import { currentToken, setCredentials } from "../../features/auth/authSlice"
import Loader from "../miscellaneous/loader/Loader"
const PersistentUserLogin = () => {
    const token = useSelector(currentToken)
    const [refresh, { isLoading }] = useRefreshMutation()
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        const RefreshToken = async () => {
            try {
                const { data } = await refresh()
                dispatch(setCredentials({ user: data.user, token: data.token }))
            } catch (error) {
                console.log(error);

            } finally {
                setLoading(false)
            }
        }
        !token ? RefreshToken() : setLoading(false)
    }, [])
    return (
        <>  {isLoading || loading ? <Loader /> : <Outlet />}</>

    )
}

export default PersistentUserLogin