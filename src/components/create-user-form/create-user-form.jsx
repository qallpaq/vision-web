import React from 'react'
import {Field} from "redux-form"
import {required} from "../../helpers"
import {CreateForm} from "../form-controls"
import './create-user-form.scss'


const Input = CreateForm('input')
const Select = CreateForm('select')

export const CreateUserForm = ({handleSubmit, arrayForSelect}) => {
    return (
        <form className='user-form' onSubmit={handleSubmit}>
            <div className='form__title'>User</div>
            <div className='form__inputs'>
                <Field component={Input} label={'Адрес электронной почты'} name={'email'}/>
                <Field component={Input} label={'Пароль'} validate={[required]} name={'password'}/>
                <Field component={Input} label={'Телефон'} name={'phone'}
                       text={'Международный формат. Может использоваться в качестве логина'}/>

                <Field component={Select} label={'Invited by'} validate={[required]} name={'select'}>
                    {arrayForSelect.map(el => <option key={el.value} value={el.value}>{el.value}</option>)}
                </Field>

                <Field component={Input} label={'Ваше имя'} validate={[required]} name={'name'}/>
                <Field component={Input} label={'Ваша фамилия'} validate={[required]} name={'surname'}/>
                <Field component={Input} label={'Ключ страны'} validate={[required]} name={'country'}/>
            </div>
            <div className='user-form__btn-wrapper'>
                <button className='user-form__btn'>POST</button>
            </div>
        </form>
    )
}
