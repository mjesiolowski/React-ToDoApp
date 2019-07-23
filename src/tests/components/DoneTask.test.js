import React from 'react'
import { shallow } from 'enzyme'
import { DoneTask } from '../../components/DoneTask'
import tasks from '../fixtures/tasks'

test('should render', () => {
  const wrapper = shallow(<DoneTask
    task={tasks[0]}
  />)
  expect(wrapper).toMatchSnapshot()
})
