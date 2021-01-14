import UserService from "../userAPI"
import {locStorage} from "../helpers"
import {
    getUserInfo,
    isAuth,
    isNotAuth,
    toggleIsFetching,
    userIsCreated
} from "./actions"


const user = new UserService()

const createUser = data => dispatch => {
    user.createUser(data)
        .then(res => {
            if (res.status < 300) {
                alert('Аккаунт создан!')
                dispatch(userIsCreated())
            }
        })
        .catch(error => {
            if (error.response) {
                const errorMessage = Object
                    .values(error.response.data)
                    .map(el => el[0] || el.email)

                alert(errorMessage)
            }
        })
}

const loginUser = data => dispatch => {
    user.authUser(data.login_name, data.login_password)
        .then(res => {
            if (res.status < 300) {
                locStorage('token', res.data.access)    // setter
                locStorage('client_id', res.data.client_id)
                locStorage('refresh', res.data.refresh)
                alert('Вы вошли в аккаунт!')
                dispatch(isAuth())
            }
        })
        .catch(error => {
            locStorage()   // clean localStorage
            dispatch(isNotAuth())
            alert(error.response.data.detail)
        })
}

const getUser = () => dispatch => {
    if (locStorage('token')) {    // getter
        dispatch(toggleIsFetching(true))
        user.getUser()
            .then(res => {
                if (res.status < 300) {
                    dispatch(getUserInfo(res.data))
                } else if (res.status === 401) {
                    user.refreshToken(locStorage('refresh'))
                        .catch(() => {
                            dispatch(isNotAuth())
                            locStorage()
                        })
                }
            })
            .then(() => dispatch(toggleIsFetching(false)))
    }
}

export {
    createUser,
    loginUser,
    getUser
}
