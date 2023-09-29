import * as Yup from 'yup';
export const registrationValidation =
    Yup.object().shape({
        name: Yup.string()
            .min(5, 'Name must be at least 5 characters')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                'Password must contain at least one lowercase letter, one uppercase letter, and one number'
            )
            .required('Password is required'),
        phone: Yup.string().required('Phone is required'),
    });