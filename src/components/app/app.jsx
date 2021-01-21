import React from 'react'
import {Route, Switch} from "react-router-dom"
import HeaderContainer from "../header"
import UserContainer from "../user"
import LoginContainer from "../login"
import SignUpContainer from "../sign-up"
import './app.scss'


const App = () => {
    return (
        <div className='app'>
            <HeaderContainer/>
            <Switch>
                <Route path='/' exact component={UserContainer}/>
                <Route path='/login' exact component={LoginContainer}/>
                <Route path='/signup' exact component={SignUpContainer}/>
            </Switch>
        </div>
    )
}

export default App
