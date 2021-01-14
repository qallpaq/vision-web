import React, {useEffect} from 'react'
import {connect} from "react-redux"
import {Redirect} from "react-router"
import {getUser} from "../../redux/thunk"
import {User} from "./user"
import Spinner from "../spinner"
import {resIsAuth, resIsFetching, resUser} from "../../redux/reselect"


const UserContainer = ({user, isAuth, getUser, isFetching}) => {

    useEffect(() => {
        getUser()
    }, [isAuth])

    if (isFetching) return <Spinner/>

    if (isAuth === false) return <Redirect to={'/login'}/>

    return <User user={user}/>
}

const mapStateToProps = state => {
    return {
        user: resUser(state),
        isAuth: resIsAuth(state),
        isFetching: resIsFetching(state)
    }
}

export default connect(mapStateToProps, {getUser})(UserContainer)
