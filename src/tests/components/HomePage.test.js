import React from 'react'
import { shallow } from 'enzyme'
import { HomePage } from '../../components/HomePage'

let wrapper

beforeEach(() => {
  wrapper = shallow(<HomePage />)
})

test('should render', () => {
  expect(wrapper).toMatchSnapshot()
})
