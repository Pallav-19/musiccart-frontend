import React from 'react'
import AuthLayout from '../components/layouts/auth/AuthLayout'
import AuthContainer from '../components/containers/auth/AuthContainer'
import AuthTitle from '../components/auth/authTitle/AuthTitle'
import RegistrationForm from '../components/forms/RegistrationForm'
import AuthBottomLine from '../components/auth/authBottomLine/AuthBottomLine'

const Register = () => {
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