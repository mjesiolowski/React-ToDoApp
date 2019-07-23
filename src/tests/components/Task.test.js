import React from 'react'
import { shallow } from 'enzyme'
import { Task } from '../../components/Task'
import tasks from '../fixtures/tasks'

let wrapper, dispatch

beforeEach(() => {
  dispatch = jest.fn()

  wrapper = shallow(<Task
    {...tasks[1]}
    dispatch={dispatch}
  />)
})

test('should render', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle handleRemoveTask', () => {
  wrapper.find('button').at(0).simulate('click')
  expect(dispatch).toBeCalledWith({
    type: 'REMOVE_TASK',
    id: tasks[1].id
  })
})

test('should handle handleDoneTask', () => {
  wrapper.find('button').at(1).simulate('click')
  expect(dispatch).toBeCalledWith({
    type: 'DONE_TASK',
    id: tasks[1].id
  })
})

test('should handle handleNavigation', () => {
  wrapper.find('NavLink').at(0).simulate('click')
  expect(dispatch).toHaveBeenLastCalledWith({
    type: 'DATE_ALERT',
    isTrue: false
  })
})