import React from 'react'
import ErrorBoundary from "./error-boundary"
import {mount} from "enzyme"


const Child = () => {
    return (
        <div className='child'>
            child
        </div>
    )
}

describe('ErrorBoundary', () => {
    const wrapper = mount(<ErrorBoundary children={<Child/>}/>)

    it('should return snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should contain child', () => {
        const result = wrapper.find('.child')
        expect(result.text()).toBe('child')
    })

    it('should return ErrorIndicator', () => {
        wrapper.setState({ hasError: true })
        const result = wrapper.find('h1')
        expect(result.text()).toBe('Something goes wrong...')
    })
})
