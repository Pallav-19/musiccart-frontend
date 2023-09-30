import React, { useEffect } from 'react'
import AuthContainer from '../components/containers/auth/AuthContainer'
import LoginForm from '../components/forms/LoginForm'
import AuthTitle from '../components/auth/authTitle/AuthTitle'
import AuthBottomLine from '../components/auth/authBottomLine/AuthBottomLine'
import AuthLayout from '../components/layouts/auth/AuthLayout'
import { useSelector } from 'react-redux'
import { currentToken } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const token = useSelector(currentToken)
    const navigate = useNavigate('')
    useEffect(() => {
        if (token) navigate("/")
    })
    return (
        <AuthLayout isLogin={true}>
            <AuthContainer>
                <AuthTitle title={"Login"} />
                <LoginForm />
                <AuthBottomLine title={"By continuing, you agree to Musicart privacy notice and conditions of use."} />
            </AuthContainer>
        </AuthLayout>
    )
}

export default Login