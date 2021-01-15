import reducer from "./reducer"


const initialState = {
    isAuth: false,
    userCreated: false,
    user: {},
    isFetching: false,
}

describe('isAuth', () => {
    it('should be === true', () => {
        const action = {type: 'IS_AUTH'}
        expect(reducer(initialState, action).isAuth).toEqual(true)
    })

    it('should be === false', () => {
        const initialState = {isAuth: true}
        const action = {type: 'IS_NOT_AUTH'}
        expect(reducer(initialState, action).isAuth).toEqual(false)
    })
})

describe('userCreated', () => {
    it('should be === true', () => {
        const action = {type: 'USER_IS_CREATED'}
        expect(reducer(initialState, action).userCreated).toBe(true)
    })

    it('should be === false', () => {
        const action = {type: 'USER_IS_UNCREATED'}
        expect(reducer(initialState, action).userCreated).toBe(false)
    })
})

describe('user', () => {
    it('should return not empty object', () => {
        const action = {
            type: 'GET_USER_INFO',
            payload: {name: 'Vano'}
        }
        expect(reducer(initialState, action).user).toEqual(action.payload)
    })
})

describe('isFetching', () => {
    it('should return false', () => {
        const initialState = {
            isFetching: true
        }

        const action = {
            type: 'TOGGLE_IS_FETCHING',
            payload: false
        }
        expect(reducer(initialState, action).isFetching).toEqual(false)
    })

    it('should return true', () => {
        const action = {
            type: 'TOGGLE_IS_FETCHING',
            payload: true
        }
        expect(reducer(initialState, action).isFetching).toEqual(true)
    })
})
