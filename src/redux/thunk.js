import {locStorage} from "../helpers"
import UserService from "../userAPI"
import {
    getUserInfo,
    isAuth,
    isNotAuth,
    toggleIsFetching,
    userIsCreated
} from "./actions"


const user = new UserService()

const createUser = data => async dispatch => {
    try {
        const res = await user.createUser(data)
        if (res.status < 300) {
            alert('Аккаунт создан!')
            dispatch(userIsCreated())
        }
    } catch (e) {
        if (e.response) {
            const errorMessage = Object
                .values(e.response.data)
                .map(el => el[0] || el.email)

            alert(errorMessage)
        }
    }
}

const loginUser = data => async dispatch => {
    try {
        const res = await user.authUser(data.login_name, data.login_password)
        if (res.status < 300) {
            locStorage('token', res.data.access)    // setter
            locStorage('client_id', res.data.client_id)
            locStorage('refresh', res.data.refresh)
            alert('Вы вошли в аккаунт!')
            dispatch(isAuth())
        }
    } catch (e) {
        locStorage()   // clean localStorage
        dispatch(isNotAuth())
        alert(e.response.data.detail)
    }
}

const getUser = () => async dispatch => {
    dispatch(toggleIsFetching(true))

    try {
        if (locStorage('token')) {
            const res = await user.getUser()
            dispatch(getUserInfo(res.data))
        }
    } catch (e) {
        user.refreshToken(locStorage('refresh'))
            .catch(() => {
                dispatch(isNotAuth())
                locStorage()
            })
    }

    dispatch(toggleIsFetching(false))
}

export {
    createUser,
    loginUser,
    getUser
}
