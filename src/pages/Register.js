import React, { useEffect } from 'react'
import AuthLayout from '../components/layouts/auth/AuthLayout'
import AuthContainer from '../components/containers/auth/AuthContainer'
import AuthTitle from '../components/auth/authTitle/AuthTitle'
import RegistrationForm from '../components/forms/RegistrationForm'
import AuthBottomLine from '../components/auth/authBottomLine/AuthBottomLine'
import { useSelector } from 'react-redux'
import { currentToken } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const token = useSelector(currentToken)
    const navigate = useNavigate('')
    useEffect(() => {
        if (token) navigate("/")
    })
    return (
        <AuthLayout isLogin={false}>
            <AuthContainer>
                <AuthTitle title={"Sign up"} />
                <RegistrationForm />
                <AuthBottomLine title={"By continuing, you agree to Musicart privacy notice and conditions of use."} />
            </AuthContainer>
        </AuthLayout>
    )
}

export default Register