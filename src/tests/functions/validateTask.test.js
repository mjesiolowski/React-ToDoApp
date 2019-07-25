import { validateTask } from '../../functions/validateTask'
import moment from 'moment'
import tasks from '../fixtures/tasks'

const dateFormat = 'DD.MM.YYYY'

test('should positively validate task', () => {
  const task = {
    taskId: '1',
    taskName: "Test tak",
    taskDeadline: moment().add(100, 'years').valueOf(),
    dateFormat
  }

  const validation = validateTask(task, tasks)
  expect(validation).toBe('taskValidated')
})

test('should reject task due to invalid length', () => {
  const task = {
    taskId: '1',
    taskName: "x",
    taskDeadline: moment().add(100, 'years').valueOf(),
    dateFormat
  }

  const validation = validateTask(task, tasks)
  expect(validation).toBe('lengthAlert')
})

test('should reject task due to duplication', () => {
  const task = {
    taskId: 'testId',
    taskName: "Task 1",
    taskDeadline: moment().add(100, 'years').valueOf(),
    dateFormat
  }

  const validation = validateTask(task, tasks)
  expect(validation).toBe('duplicateAlert')
})

test('should accept duplicated name when the same id is provided', () => {
  const task = {
    taskId: '1',
    taskName: "Task 1",
    taskDeadline: moment().add(100, 'years').valueOf(),
    dateFormat
  }

  const validation = validateTask(task, tasks)
  expect(validation).toBe('taskValidated')
})

test('should reject task due to invalid date', () => {
  const task = {
    taskId: '1',
    taskName: "Task 1",
    taskDeadline: moment().subtract(100, 'years').valueOf(),
    dateFormat
  }

  const validation = validateTask(task, tasks)
  expect(validation).toBe('dateAlert')
})
