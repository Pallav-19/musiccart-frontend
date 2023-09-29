import { ErrorMessage } from 'formik'
import React from 'react'

const ErrorMessageDisplay = ({ name }) => {
    return (
        <ErrorMessage name="name">
            {(msg) => <small style={{ color: 'red', display: 'block' }}>{msg}</small>}
        </ErrorMessage>
    )
}

export default ErrorMessageDisplay