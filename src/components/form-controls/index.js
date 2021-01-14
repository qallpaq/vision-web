import React from 'react'
import './forms-controls.scss'


export const CreateForm = Element => ({meta, input, label, text, ...props}) => {
    const hasError = meta.touched && meta.error && meta.submitFailed
    return (
        <div className={`form__item-wrapper ${hasError ? 'error' : ''}`}>
            <div className={`form__item-title ${hasError ? 'error' : ''}`}>
                {label}
            </div>

            <Element {...input}
                     {...props}
                     className={`form__item form__item_${hasError ? 'error' : ''}`}
            />

            <div className='form__item-content'>
                <span className='form__item-text'>
                    {text}
                </span>

                {hasError && <span className='form__item-error'>
                    {meta.error}
                </span>}
            </div>
        </div>
    )
}

export const CreateLoginForm = Element => ({input, label, ...props}) => {
    return (
        <div className='login__form-wrapper'>
            <div className='login__form-label'>{label}</div>
            <Element {...input} {...props} className={`form__item`}/>
        </div>
    )
}
