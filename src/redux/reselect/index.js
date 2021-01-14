const resUserCreated = state => state.userReducer.userCreated
const resArrayForSelect = state => state.userReducer.arrayForSelect
const resIsAuth = state => state.userReducer.isAuth
const resUser = state => state.userReducer.user
const resIsFetching = state => state.userReducer.isFetching


export {
    resUserCreated,
    resArrayForSelect,
    resIsAuth,
    resUser,
    resIsFetching
}
