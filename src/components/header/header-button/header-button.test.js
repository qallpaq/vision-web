import React from 'react'
import {shallow} from "enzyme"
import HeaderButton from "./header-button"


describe('HeaderButton', () => {
    it('contain text "log in"', () => {
        const wrapper = shallow(<HeaderButton text={'log in'} link={'/'}/>)
        expect(wrapper.text()).toBe('log in')
    })

    it('should be without text', () => {
        const wrapper = shallow(<HeaderButton link={'/'}/>)
        expect(wrapper.text()).toBe('')
    })

    it('on click should call callback', () => {
        const mockCallBack = jest.fn()
        const wrapper = shallow(<HeaderButton link={'/'} fn={mockCallBack}/>)
        wrapper.find('button').simulate('click')
        expect(mockCallBack).toHaveBeenCalledTimes(1)
    })
})
