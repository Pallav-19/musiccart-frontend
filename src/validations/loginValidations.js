import * as Yup from 'yup';
export const loginValidation = Yup.object().shape({
    emailOrPhone: Yup.string().required('Email or phone is required'),
    password: Yup.string().required('Password is required'),
});