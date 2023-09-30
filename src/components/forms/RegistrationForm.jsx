import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import './Forms.css'
import InputBox from '../miscellaneous/InputBox';
import { registrationValidation } from '../../validations/registrationValidations';
import Button from '../button/Button';
import { useRegisterMutation } from '../../api/auth/authApiSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../features/notifications/notificationSlice';
import { setCredentials } from '../../features/auth/authSlice';
import { setLoading, unsetLoading } from '../../features/utils/loadingSlice';

const RegistrationForm = () => {

    const initialValues = {
        name: '',
        email: '',
        password: '',
        phone: '',
    };
    const [register, { isLoading, isError, error }] = useRegisterMutation()
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/"
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (error) {
            dispatch(showNotification({ message: error?.data?.message, severity: 'error' }))
        }
        isLoading ? dispatch(setLoading()) : dispatch(unsetLoading())
    }, [isError, error, isLoading, dispatch])
    const handleSubmit = async (values) => {
        try {
            const { data } = await register(values)
            setCredentials({ user: data?.user, token: data?.token })
            dispatch(showNotification({ message: "Signup Successfull!", severity: 'info' }))
            data && navigate(from)
        } catch (error) {
            dispatch(showNotification({ message: error.message, severity: 'error' }))
        }
    };

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={registrationValidation}
            onSubmit={handleSubmit}
        >
            <Form>
                <InputBox label={'Name'} id={'name'} type={'text'} />
                <InputBox label={'Phone Number'} id={'phone'} type={'text'} />
                <InputBox label={'Email Address'} id={'email'} type={'email'} />
                <InputBox label={'Password'} id={'password'} type={'password'} />
                <Button
                    type={'submit'}
                    title={'Continue'}
                />
            </Form>
        </Formik>

    );
};

export default RegistrationForm;
