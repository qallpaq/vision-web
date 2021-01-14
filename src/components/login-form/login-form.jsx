import React from 'react'
import {CreateLoginForm} from "../form-controls"
import {Field, reduxForm} from "redux-form"
import './login-form.scss'


const Input = CreateLoginForm('input')

const LoginForm = ({handleSubmit}) => {
    return (
        <form className='login__form' onSubmit={handleSubmit}>
            <div className='logo logo_login'>Vision Web</div>

            <Field component={Input}
                   required
                   label={'Имя пользователя:'}
                   name={'login_name'}/>

            <Field component={Input}
                   required
                   label={'Пароль:'}
                   name={'login_password'}/>

            <button className='login__form-btn'>Log in</button>
        </form>
    )
}

export default reduxForm({form: 'loginForm'})(LoginForm)
