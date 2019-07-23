import { filtersReducer } from '../../reducers/filters'

test('should setup default values for filters reducer', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    sortBy: 'createdAt',
    filteredText: '',
  })
})

test('should set text filter', () => {
  const action = { type: 'SET_TEXT_FILTER', text: 'test text' }
  const state = filtersReducer(undefined, action)
  expect(state).toEqual({
    sortBy: 'createdAt',
    filteredText: action.text,
  })
})

test('should set sortBy to deadline', () => {
  const action = { type: 'SET_SORT_BY', sortBy: 'deadline' }
  const state = filtersReducer(undefined, action)
  expect(state).toEqual({
    sortBy: 'deadline',
    filteredText: ''
  })
})