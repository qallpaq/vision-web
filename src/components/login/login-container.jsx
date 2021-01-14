import React, {useEffect} from 'react'
import {loginUser} from "../../redux/thunk"
import {connect} from "react-redux"
import {Login} from "./login"
import {userIsUncreated} from "../../redux/actions"
import withAuthRedirect from "../withAuthRedirect"
import {compose} from "redux"


const LoginContainer = ({loginUser, userIsUncreated}) => {

    useEffect(() => {
        userIsUncreated()
    }, [])

    const Submit = (data) => {
        loginUser(data)
    }

    return <Login Submit={Submit}/>
}

export default compose(
    connect(null, {loginUser, userIsUncreated}),
    withAuthRedirect)
(LoginContainer)
