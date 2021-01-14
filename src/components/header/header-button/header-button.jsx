import React from 'react'
import {Link} from "react-router-dom"
import './header-button.scss'


const HeaderButton = ({text, link, fn = () => null}) => {
    return (
        <button onClick={fn} className='header__button'>
            <Link to={link}>{text}</Link>
        </button>
    )
}

export default HeaderButton
