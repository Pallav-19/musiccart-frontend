import React from 'react';
import { Formik, Form } from 'formik';
import './Forms.css'
import InputBox from '../miscellaneous/InputBox';
import { registrationValidation } from '../../validations/registrationValidations';
import Button from '../button/Button';

const RegistrationForm = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        phone: '',
    };
    const handleSubmit = (values) => {
        console.log(values);
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
