import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import './Forms.css'
import Button from '../button/Button';
import InputBox from '../miscellaneous/InputBox';
import { loginValidation } from '../../validations/loginValidations';
import { useLoginMutation } from '../../api/auth/authApiSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../features/auth/authSlice';
import { showNotification } from '../../features/notifications/notificationSlice';
import { setLoading, unsetLoading } from '../../features/utils/loadingSlice';
const LoginForm = () => {
    const initialValues = {
        emailOrPhone: '',
        password: '',
    };
    const [login, { isLoading, isError, error }] = useLoginMutation()
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/"
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (error) {
            dispatch(showNotification({ message: error?.data?.message, severity: 'error' }))
        }
        isLoading ? dispatch(setLoading()) : dispatch(unsetLoading())

    }, [isError, error, dispatch, isLoading])
    const handleSubmit = async (values) => {
        try {
            const { data } = await login({ username: values?.emailOrPhone, password: values?.password })
            dispatch(setCredentials({ user: data?.user, token: data?.token }))
            dispatch(showNotification({ message: "Login successfull!", severity: 'info' }))
            data && navigate(from)
        } catch (error) {
            dispatch(showNotification({ message: error.message, severity: 'error' }))
        }
    };
    return (

        <Formik
            initialValues={initialValues}
            validationSchema={loginValidation}
            onSubmit={handleSubmit}
        >
            <Form>
                <InputBox label={'Enter your email or phone'} id={'emailOrPhone'} type={'email'} />
                <InputBox label={'Enter your password'} id={'password'} type={'password'} />
                <Button
                    type={'submit'}
                    title={'Continue'}
                />
            </Form>
        </Formik>

    );
};

export default LoginForm;
