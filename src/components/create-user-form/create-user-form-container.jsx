import React from 'react'
import {reduxForm} from "redux-form"
import {connect} from "react-redux"
import {Redirect} from "react-router"
import {CreateUserForm} from "./create-user-form"
import {compose} from "redux"
import {resUserCreated, resArrayForSelect} from "../../redux/reselect"


const CreateUserFormContainer = ({handleSubmit, arrayForSelect, userCreated}) => {

    if (userCreated) return <Redirect to={'/login'}/>

    return <CreateUserForm handleSubmit={handleSubmit}
                           arrayForSelect={arrayForSelect}/>
}

const mapStateToProps = state => {
    return {
        userCreated: resUserCreated(state),
        arrayForSelect: resArrayForSelect(state)
    }
}

export default compose(
    reduxForm({form: 'createUser'}),
    connect(mapStateToProps)
)(CreateUserFormContainer)
