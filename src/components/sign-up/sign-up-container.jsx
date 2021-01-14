import React from 'react'
import {createUser} from "../../redux/thunk"
import {connect} from "react-redux"
import {Redirect} from "react-router"
import {SignUp} from "./sign-up"
import {resIsAuth, resUserCreated} from "../../redux/reselect"
import {createUserInfoForSubmit} from "../../helpers"
import {compose} from "redux"
import withAuthRedirect from "../withAuthRedirect"


const SignUpContainer = ({createUser, userCreated}) => {

    const onSubmit = data => {
        createUser(createUserInfoForSubmit(data))
    }

    if (userCreated) return <Redirect to={'/login'}/>

    return <SignUp onSubmit={onSubmit}/>
}

const mapStateToProps = state => {
    return {
        isAuth: resIsAuth(state),
        userCreated: resUserCreated(state)
    }
}

export default compose(
    connect(mapStateToProps, {createUser}),
    withAuthRedirect)
(SignUpContainer)
