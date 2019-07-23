import React from 'react'
import { shallow } from 'enzyme'
import { RenderComments } from '../../components/RenderComments'
import tasks from '../fixtures/tasks'
import uuid from 'uuid/';

jest.mock('uuid')

describe('mock uuid', () => {
  it('should return testid }', () => {
    uuid.mockImplementation(() => 'testid');

  })
})

let wrapper

beforeEach(() => {

  wrapper = shallow(<RenderComments
    task={tasks[1]}
  />)
})

test('should render', () => {
  expect(wrapper).toMatchSnapshot()
})