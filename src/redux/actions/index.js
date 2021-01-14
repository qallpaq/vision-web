export const IS_AUTH = 'IS_AUTH'
export const isAuth = () => ({type: IS_AUTH})

export const IS_NOT_AUTH = 'IS_NOT_AUTH'
export const isNotAuth = () => ({type: IS_NOT_AUTH})

export const USER_IS_CREATED = 'USER_IS_CREATED'
export const userIsCreated = () => ({type: USER_IS_CREATED})

export const USER_IS_UNCREATED = 'USER_IS_UNCREATED'
export const userIsUncreated = () => ({type: USER_IS_UNCREATED})

export const GET_USER_INFO = 'GET_USER_INFO'
export const getUserInfo = payload => ({type: GET_USER_INFO, payload})

export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
export const toggleIsFetching = payload => ({type: TOGGLE_IS_FETCHING, payload})
