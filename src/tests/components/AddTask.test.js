import React from 'react'
import { shallow } from 'enzyme'
import { AddTask } from '../../components/AddTask'
import tasks from '../fixtures/tasks'
import alerts from '../fixtures/alerts'
import moment from 'moment'

let wrapper, dispatch

beforeEach(() => {
  dispatch = jest.fn()

  wrapper = shallow(<AddTask
    dispatch={dispatch}
    alerts={alerts}
    tasks={tasks}
  />)
})

test('should render', () => {
  expect(wrapper).toMatchSnapshot()
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

test('should handle adding task', () => {
  const task = {
    name: 'dsdsd',
    isPriority: 'true',
    deadline: moment().add(1, 'year').valueOf(),
  }

  wrapper.find('input').at(0).simulate('change', {
    target: {
      value: task.name
    },
  });
  wrapper.find('select').simulate('change', {
    target: {
      value: task.isPriority
    },
  });
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value: task.deadline
    },
  });

  wrapper.find('form').simulate('submit', {
    preventDefault: () => { },
    dateFormat: "DD.MM.YYYY"
  })
  expect(dispatch).toHaveBeenLastCalledWith(
    {
      type: "ADD_TASK",
      task: {
        completed: false,
        completedAt: null,
        createdAt: moment().valueOf(),
        comments: [],
        name: task.name,
        isPriority: true,
        deadline: task.deadline,
        id: expect.any(String)
      }

    }
  )
  expect(wrapper.find('input').at(0).prop('value')).toEqual('')
})

