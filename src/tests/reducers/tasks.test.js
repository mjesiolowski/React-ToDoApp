import { tasksReducer } from '../../reducers/tasks'
import tasks from '../fixtures/tasks'
import moment from 'moment'
import uuid from 'uuid'

const defaultState = [
  {
    ...tasks[0],
    id: expect.any(String)
  },
  {
    ...tasks[1],
    id: expect.any(String)
  },
  {
    ...tasks[2],
    id: expect.any(String)
  },
]

test('should setup default values for tasks reducer', () => {
  const state = tasksReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual(defaultState)
})

test('should add a given task', () => {
  const action = { type: 'ADD_TASK', task: tasks[0] }
  const state = tasksReducer(tasks, action)
  expect(state).toEqual([
    ...tasks,
    action.task
  ])
})

test('should edit a given task', () => {
  const id = tasks[0].id
  const update = { name: 'Test task' }
  const action = { type: 'EDIT_TASK', id, update }
  const state = tasksReducer(tasks, action)
  expect(state).toEqual([
    {
      ...tasks[0],
      ...update
    }, {
      ...tasks[1]
    },
    {
      ...tasks[2]
    }
  ])
})

test('should mark a given task as done', () => {
  const id = tasks[0].id
  const action = { type: 'DONE_TASK', id, }
  const state = tasksReducer(tasks, action)
  expect(state).toEqual([
    {
      ...tasks[0],
      completed: true,
      completedAt: moment().valueOf()
    }, {
      ...tasks[1]
    },
    {
      ...tasks[2]
    }
  ])
})

test('should remove a given task', () => {
  const id = tasks[0].id
  const action = { type: 'REMOVE_TASK', id }
  const state = tasksReducer(tasks, action)
  expect(state).toEqual([
    {
      ...tasks[1]
    },
    {
      ...tasks[2]
    }
  ])
})

test('should add comment a given task', () => {
  const id = tasks[0].id
  const text = 'test comment'
  const comment = {
    id: uuid(),
    text,
    createdAt: moment().valueOf(),
    beingEdited: false
  }
  const action = { type: 'ADD_COMMENT', id, comment }
  const state = tasksReducer(tasks, action)
  expect(state).toEqual(
    [
      {
        ...tasks[0],
        comments: [...tasks[0].comments, action.comment]
      }, {
        ...tasks[1]
      },
      {
        ...tasks[2]
      }
    ]
  )
})

test('should edit comment of a given task', () => {
  const id = tasks[1].id
  const update = { ...tasks[1].comments[0], text: 'new value' }

  const action = { type: 'EDIT_COMMENT', id, update }
  const state = tasksReducer(tasks, action)
  expect(state).toEqual(
    [
      {
        ...tasks[0],
      }, {
        ...tasks[1],
        comments: [
          {
            ...update
          }
        ]
      },
      {
        ...tasks[2]
      }
    ]
  )
})

test('should delete comment of a given task', () => {
  const taskId = tasks[1].id
  const commentId = tasks[1].comments[0].id

  const action = { type: 'DELETE_COMMENT', taskId, commentId }
  const state = tasksReducer(tasks, action)
  expect(state).toEqual(
    [
      {
        ...tasks[0],
      }, {
        ...tasks[1],
        comments: []
      },
      {
        ...tasks[2]
      }
    ]
  )
})