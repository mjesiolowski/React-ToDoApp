import React from 'react'
import { shallow } from 'enzyme'
import { Navigation } from '../../components/Navigation'


let wrapper, dispatch

beforeEach(() => {
  dispatch = jest.fn()

  wrapper = shallow(<Navigation
    dispatch={dispatch}
  />)
})

test('should render', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle dispatchFilteredText', () => {
  const value = 'test'
  wrapper.find('input').simulate('change', {
    target: { value }
  })
  expect(wrapper.find('input').prop('value')).toBe(value)
  expect(dispatch).toHaveBeenLastCalledWith({
    text: value, type: 'SET_TEXT_FILTER'
  })
})

test('should handle dispatchSortBy', () => {
  const value = 'test'
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(wrapper.find('select').prop('value')).toBe(value)
  expect(dispatch).toHaveBeenLastCalledWith({
    sortBy: value, type: 'SET_SORT_BY'
  })
})