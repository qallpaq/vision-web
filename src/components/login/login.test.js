import React from 'react'
import {Login} from "./login"
import {shallow} from "enzyme"


describe('Login', () => {
    const wrapper = shallow(<Login/>)

    it('should return snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should contain .login__page', () => {
        const result = wrapper.find('.login__page')
        expect(result).toHaveLength(1)
    })
})
