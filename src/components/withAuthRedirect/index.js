import React from 'react'
import {connect} from "react-redux"
import {resIsAuth} from "../../redux/reselect"
import {Redirect} from "react-router"


//   if user is auth show him only UserPage ('/')
const withAuthRedirect = Component => {

    const WithAuth = props => {

        if (props.isAuth) return <Redirect to={'/'}/>

        return <Component {...props} />
    }

    const mapStateToProps = state => ({isAuth: resIsAuth(state)})

    return connect(mapStateToProps)(WithAuth)
}

export default withAuthRedirect
