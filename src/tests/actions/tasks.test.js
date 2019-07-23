import { addTask, editTask, removeTask, doneTask, addComment, editComment, deleteComment } from '../../actions/tasks'
import moment from 'moment'
import tasks from '../fixtures/tasks'

test('should set ADD_TASK action with defaults', () => {
   const taskDefaults = {
      name: "default task",
      completed: false,
      completedAt: null,
      createdAt: moment().valueOf(),
      deadline: null,
      isPriority: false,
      comments: []
   }
   const action = addTask()
   expect(action).toEqual({
      type: 'ADD_TASK',
      task: {
         id: expect.any(String),
         ...taskDefaults
      }
   })
})

test('should set ADD_TASK action with provided values', () => {
   const task = tasks[1]
   const action = addTask(task)
   expect(action).toEqual({
      type: 'ADD_TASK',
      task: {
         ...task,
         id: expect.any(String),
         name: task.name.trim(),
      }
   })
})

test('should set EDIT_TASK action', () => {
   const id = 'testID'
   const update = {
      name: 'Test task',
      isPriority: false,
      deadline: moment().add(10, 'days').valueOf(),
   }
   const action = editTask(id, update)
   expect(action).toEqual({
      type: 'EDIT_TASK',
      id,
      update
   })
})

test('should set REMOVE_TASK action', () => {
   const id = 'testID'
   const action = removeTask(id)
   expect(action).toEqual({
      type: 'REMOVE_TASK',
      id
   })
})

test('should set DONE_TASK action', () => {
   const id = 'testID'
   const action = doneTask(id)
   expect(action).toEqual({
      type: 'DONE_TASK',
      id
   })
})

test('should set ADD_COMMENT action', () => {
   const id = 'testID'
   const text = 'testComment'
   const action = addComment(id, text)
   expect(action).toEqual({
      type: 'ADD_COMMENT',
      id,
      comment: {
         id: expect.any(String),
         text,
         createdAt: moment().valueOf(),
         beingEdited: false
      }
   })
})

test('should set EDIT_COMMENT action', () => {
   const id = 'testID'
   const update = { beingEdited: true }
   const action = editComment(id, update)
   expect(action).toEqual({
      type: 'EDIT_COMMENT',
      id,
      update
   })
})

test('should set DELETE_COMMENT action', () => {
   const taskId = 'testID'
   const commentId = 'testID'
   const action = deleteComment(taskId, commentId)
   expect(action).toEqual({
      type: 'DELETE_COMMENT',
      taskId,
      commentId
   })
})
