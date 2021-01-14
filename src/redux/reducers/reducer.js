import {
    GET_USER_INFO,
    IS_AUTH, IS_NOT_AUTH,
    TOGGLE_IS_FETCHING,
    USER_IS_CREATED,
    USER_IS_UNCREATED
} from "../actions"


const initialState = {
    isAuth: false,
    userCreated: false,
    user: {},
    isFetching: false,
    arrayForSelect: [
        {value: 'RU-600290'},
        {value: 'RU-287522'},
        {value: 'RU-353344'},
        {value: 'RU-637164'},
        {value: 'RU-344470'},
        {value: 'RU-255335'},
        {value: 'RU-812138'},
        {value: 'RU-502831'},
        {value: 'RU-741430'},
        {value: 'RU-776340'},
        {value: 'RU-398368'},
        {value: 'RU-847058'},
        {value: 'RU-315094'},
        {value: 'RU-492740'},
        {value: 'RU-144699'},
        {value: 'RU-881752'},
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {...state, isAuth: true, userCreated: false}
        case IS_NOT_AUTH:
            return {...state, isAuth: false, user: {}}
        case GET_USER_INFO:
            return {...state, user: action.payload}
        case USER_IS_CREATED:
            return {...state, userCreated: true}
        case USER_IS_UNCREATED:
            return {...state, userCreated: false}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload}
        default:
            return state
    }
}

export default reducer
