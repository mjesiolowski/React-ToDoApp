import React from 'react'
import { shallow } from 'enzyme'
import { EditTask } from '../../components/EditTask'
import tasks from '../fixtures/tasks'
import alerts from '../fixtures/alerts'

let wrapper, history, dispatch, task

beforeEach(() => {
  history = { push: jest.fn() }
  dispatch = jest.fn()
  task = tasks[2]

  wrapper = shallow(<EditTask
    history={history}
    dispatch={dispatch}
    tasks={tasks}
    task={task}
    alerts={alerts}
  />)
})

test('should render', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should remove task', () => {
  wrapper.find('.task__button button').at(0).simulate('click')
  expect(dispatch).toHaveBeenLastCalledWith(
    {
      type: "REMOVE_TASK",
      id: task.id
    }
  )
  expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should handle updating task', () => {
  wrapper.find('.task__button button').at(1).simulate('click')
  expect(dispatch).toHaveBeenLastCalledWith(
    {
      id: task.id,
      type: "EDIT_TASK",
      update: {
        ...task,
        deadline: expect.any(Number)
      },
    }
  )
  expect(history.push).toHaveBeenLastCalledWith('/')
})

test('should change taskName state', () => {
  const value = 'test'
  wrapper.find('input').at(0).simulate('change', {
    target: {
      value,
    },
  });

  expect(wrapper.find('input').at(0).prop('value')).toEqual(value)
})

test('should change taskPriority state', () => {
  const value = 'true'
  wrapper.find('select').simulate('change', {
    target: {
      value,
    },
  });

  expect(wrapper.find('select').prop('value')).toEqual(true)
})

test('should change taskDeadline state', () => {
  const value = 20
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value,
    },
  });

  expect(wrapper.find('input').at(1).prop('value')).toEqual(value)
})