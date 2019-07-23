import React from 'react'
import { shallow } from 'enzyme'
import { RenderTasks } from '../../components/RenderTasks'
import tasks from '../fixtures/tasks'

let wrapper

beforeEach(() => {
  wrapper = shallow(<RenderTasks
    tasks={tasks}
  />)
})

test('should render', () => {
  expect(wrapper).toMatchSnapshot()
})