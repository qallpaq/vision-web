import React from 'react'
import {shallow} from "enzyme"
import {Header} from "./header"


describe('Header', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(<Header/>)
    })

    it('snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should contain span.logo', () => {
        const result = wrapper.find('span.logo').text()
        expect(result).toBe('Vision Web')
    })

    it('should contain 2 .links__item', () => {
        const result = wrapper.find('.links__item')
        expect(result.length).toBe(2)
    })
})
