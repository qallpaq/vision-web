import React from 'react'
import ErrorIndicator from "./error-indicator"
import {shallow} from "enzyme"


describe('ErrorIndicator', () => {
    const wrapper = shallow(<ErrorIndicator/>)

    it('should return snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should contain .error-page__title', () => {
        const result = wrapper.find('.error-page__title')
        expect(result.text()).toBe('Something goes wrong...')
    })

    it('should contain .error-page__subtitle', () => {
        const result = wrapper.find('.error-page__subtitle')
        expect(result.text()).toBe('don`t worry we will fix it')
    })
})
