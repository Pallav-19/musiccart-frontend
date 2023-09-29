import { ErrorMessage, Field } from 'formik'
import React from 'react'

const InputBox = ({ label, id, type }) => {
    return (
        <div style={{ width: '100%', marginBottom: '0.8rem' }}>
            <label htmlFor={id}>{label}</label>
            <Field style={{ width: 'inherit' }} type={type} id={id} name={id} />
            <ErrorMessage name={id}>
                {(msg) => <small style={{ color: 'red', display: 'block' }}>{msg}</small>}
            </ErrorMessage>
        </div>
    )
}

export default InputBox