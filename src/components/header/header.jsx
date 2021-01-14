import React from 'react'
import HeaderButton from "./header-button"
import './header.scss'


export const Header = ({isAuth, removeUser}) => {
    return (
        <header className='header'>
            <div className='container'>
                <div className="header__inner">
                    <span className='logo'>Vision Web</span>
                    <ul className='links'>
                        <li className='links__item'>
                            {isAuth
                                ? <HeaderButton text={'Log Out'} link={'/login'} fn={removeUser}/>
                                : <HeaderButton text={'Log In'} link={'/login'}/>
                            }
                        </li>
                        <li className='links__item'>
                            <HeaderButton text={'Sign Up'} link={'/signup'}/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
