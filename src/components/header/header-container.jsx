import React from 'react'
import {isNotAuth} from "../../redux/actions"
import {connect} from "react-redux"
import {Header} from "./header"
import {resIsAuth} from "../../redux/reselect"
import {locStorage} from "../../helpers"


const HeaderContainer = ({isAuth, isNotAuth}) => {

    const removeUser = () => {
        isNotAuth()
        locStorage()
    }

    return <Header removeUser={removeUser}
                   isAuth={isAuth}/>
}

const mapStateToProps = state => ({isAuth: resIsAuth(state)})

export default connect(mapStateToProps, {isNotAuth})(HeaderContainer)
