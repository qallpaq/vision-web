import {
    locStorage,
    toNormalCase,
    createUserInfo,
    createUserInfoForSubmit,
    required
} from "./helpers"


describe('toNormalCase', () => {
    it('should return Test', () => {
        expect(toNormalCase('test')).toBe('Test')
    })

    it('should return Test var', () => {
        expect(toNormalCase('test_var')).toBe('Test var')
    })

    it('should return Test var bar test test', () => {
        expect(toNormalCase('test_var_bar_test_test')).toBe('Test var bar test test')
    })
})

describe('locStorage', () => {
    it('should return length === 0', () => {
        localStorage.setItem('var', 'bar')
        locStorage()
        expect(localStorage.length).toBe(0)
    })

    it('should return length === 1 (setter)', () => {
        locStorage('bar', 'foo')
        expect(localStorage.length).toBe(1)
    })

    it('should return bar === foo getter', () => {
        localStorage.setItem('bar', 'foo')
        expect(locStorage('bar')).toEqual('foo')
    })
})

describe('infoCreators', () => {
    const data = {
        email: 'email',
        password: 'password',
        phone: 'phone',
        invited_by: 'select',
        name: 'name',
        surname: 'surname',
        country_key: 'country',
        bar: {name: 'Vano'}
    }

    it('createUserInfo should return object without objects', () => {
        expect(createUserInfo(data)).toEqual({
            email: 'email',
            password: 'password',
            phone: 'phone',
            invited_by: 'select',
            name: 'name',
            surname: 'surname',
            country_key: 'country',
        })
    })

    it('createUserInfoForSubmit should return object inside object', () => {
        expect(createUserInfoForSubmit(data)).toEqual({
            user: {
                email: data.email,
                password: data.password
            },
            phone: data.phone,
            invited_by: data.select,
            name: data.name,
            surname: data.surname,
            country_key: data.country
        })
    })
})

describe('required', () => {
    it('should return "Это поле не может быть пустым."', () => {
        expect(required()).toEqual('Это поле не может быть пустым.')
    })

    it('should return undefined', () => {
        expect(required('foo')).toEqual(undefined)
    })
})
