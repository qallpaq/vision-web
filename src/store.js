import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import {reducer as formReducer} from "redux-form"
import thunkMiddleware from 'redux-thunk'
import reducer from "./redux/reducers/reducer"


const reducers = combineReducers({
    userReducer: reducer,
    form: formReducer
})

const store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware)
))

export default store
