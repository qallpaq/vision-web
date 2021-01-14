import React from 'react'
import CreateUserFormContainer from "../create-user-form"
import './sign-up.scss'


export const SignUp = ({onSubmit}) => {
    return (
        <div className='container'>
            <CreateUserFormContainer onSubmit={onSubmit}/>
        </div>
    )
}
