import React from 'react'
import { shallow } from 'enzyme'
import { RenderDoneTasks } from '../../components/RenderDoneTasks'
import tasks from '../fixtures/tasks'

let wrapper

beforeEach(() => {
  wrapper = shallow(<RenderDoneTasks
    tasks={tasks}
  />)
})

test('should render', () => {
  expect(wrapper).toMatchSnapshot()
})