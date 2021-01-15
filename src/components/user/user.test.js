import React from 'react'
import {mount} from "enzyme"
import {User} from "./user"


const user = {
    avatar: 'asd'
}

describe('User', () => {
    const wrapper = mount(<User user={user}/>)

    it('snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should contain .user-content', () => {
        const result = wrapper.find('.user-content')
        expect(result).toHaveLength(1)
    })

    it('should return img src === user.avatar', () => {
        const result = wrapper.find('img')
        expect(result.prop("src")).toEqual(user.avatar)
    })
})
