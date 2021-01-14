import React from 'react'
import {createUserInfo, toNormalCase} from "../../helpers"
import './user.scss'


const UserContent = data => {
    return (
        <ul className='user-content'>
            {
                Object.keys(data).map(item => {
                    return (
                        <li key={data[item] + item} className='user-content__item'>
                            {toNormalCase(item)}: {data[item]}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export const User = ({user}) => {
    return (
        <div className='container'>
            <div className="user__page">

                <div className='user__left'>
                    <div className='user__img-wrapper'>
                        <img className='user__img-inner' src={user.avatar} alt="avatar"/>
                    </div>
                </div>

                <div className='user__right'>
                    <ul className='user-content'>
                        {UserContent(createUserInfo(user))}
                    </ul>
                </div>

            </div>
        </div>
    )
}
