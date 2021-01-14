import React from 'react'
import LoginForm from "../login-form"
import './login.scss'


export const Login = ({Submit}) => {
    return (
        <div className='login__page'>
            <LoginForm onSubmit={Submit}/>
        </div>
    )
}
