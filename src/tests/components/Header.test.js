import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'

let wrapper, dispatch

beforeEach(() => {
  dispatch = jest.fn()

  wrapper = shallow(<Header
    dispatch={dispatch}
  />)
})

test('should render', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle return button', () => {
  wrapper.find('h1').simulate('click')
  expect(dispatch).toBeCalled()
})