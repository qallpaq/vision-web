import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/app"
import {HashRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"
import store from './store'
import ErrorBoundary from "./components/error-boundary"


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Router>
                <App/>
            </Router>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root'))
