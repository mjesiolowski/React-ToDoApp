import { addTask, editTask } from '../../actions/tasks'
import moment from 'moment'
import tasks from '../fixtures/tasks'

test('should set ADD_TASK action with defaults', () => {
   const taskDefaults = {
      name: "default task",
      completed: false,
      completedAt: null,
      createdAt: moment().valueOf(),
      deadline: null,
      isPriority: 'false',
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