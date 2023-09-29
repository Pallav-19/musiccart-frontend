import React from 'react'
import AuthContainer from '../components/containers/auth/AuthContainer'
import LoginForm from '../components/forms/LoginForm'
import AuthTitle from '../components/auth/authTitle/AuthTitle'
import AuthBottomLine from '../components/auth/authBottomLine/AuthBottomLine'
import AuthLayout from '../components/layouts/auth/AuthLayout'

const Login = () => {
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