import React from 'react';
import { Formik, Form } from 'formik';
import './Forms.css'
import Button from '../button/Button';
import InputBox from '../miscellaneous/InputBox';
import { loginValidation } from '../../validations/loginValidations';
const LoginForm = () => {
    const initialValues = {
        emailOrPhone: '',
        password: '',
    };
    const handleSubmit = (values) => {
        console.log('values');
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
