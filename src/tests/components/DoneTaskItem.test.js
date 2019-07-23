import React from 'react'
import { shallow } from 'enzyme'
import { DoneTaskItem } from '../../components/DoneTaskItem'
import tasks from '../fixtures/tasks'

test('should render', () => {
  const wrapper = shallow(<DoneTaskItem
    task={tasks[0]}
  />)
  expect(wrapper).toMatchSnapshot()
})
