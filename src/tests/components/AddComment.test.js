import React from 'react'
import { shallow } from 'enzyme'
import { AddComment } from '../../components/AddComment'


let wrapper, addComment, commentAlertAction, taskId

beforeEach(() => {
  addComment = jest.fn()
  commentAlertAction = jest.fn()
  taskId = 'testId'
  wrapper = shallow(<AddComment
    addComment={addComment}
    commentAlertAction={commentAlertAction}
    taskId={taskId}
    commentAlert={false}
  />)
})

test('should render', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should impact state on input change', () => {
  const value = 'test'
  wrapper.find('input').simulate('change', {
    target: {
      value,
    },
  });

  expect(wrapper.find('input').prop('value')).toEqual(value)
})

test('should handle submit without changing state', () => {
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(commentAlertAction).toHaveBeenLastCalledWith(true)
})

test('should handle submit with changed state', () => {
  const value = 'test'
  wrapper.find('input').simulate('change', {
    target: {
      value,
    },
  });

  expect(wrapper.find('input').prop('value')).toEqual(value)

  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(commentAlertAction).toHaveBeenLastCalledWith(false)
  expect(addComment).toHaveBeenLastCalledWith(taskId, value)
  expect(wrapper.find('input').prop('value')).toEqual("")
})