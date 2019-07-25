import { getFilteredTasks } from '../../functions/getFilteredTasks'
import tasks from '../fixtures/tasks'


test('should filter with given text', () => {
  const filteredText = '2'
  const filteredTasks = getFilteredTasks(tasks, { filteredText })
  expect(filteredTasks).toEqual([tasks[1]])
})

test('should sort by createdAt', () => {
  const filteredText = ''
  const sortBy = 'createdAt'
  const filteredTasks = getFilteredTasks(tasks, { filteredText, sortBy })
  expect(filteredTasks).toEqual([tasks[0], tasks[2], tasks[1]])
})

test('should sort by deadline', () => {
  const filteredText = ''
  const sortBy = 'deadline'
  const filteredTasks = getFilteredTasks(tasks, { filteredText, sortBy })
  expect(filteredTasks).toEqual([tasks[2], tasks[1], tasks[0]])
})

test('should sort by name (default)', () => {
  const filteredText = ''
  const sortBy = ''
  const filteredTasks = getFilteredTasks(tasks, { filteredText, sortBy })
  expect(filteredTasks).toEqual([tasks[0], tasks[1], tasks[2]])
})

test('should sort by priority', () => {
  const filteredText = ''
  const sortBy = 'priority'
  const filteredTasks = getFilteredTasks(tasks, { filteredText, sortBy })
  expect(filteredTasks).toEqual([tasks[1], tasks[0], tasks[2]])
})
