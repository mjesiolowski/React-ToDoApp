import { alertsReducer } from '../../reducers/alerts'

test('should set true for length alert', () => {
  const action = { type: 'LENGTH_ALERT', isTrue: true }
  const state = alertsReducer(undefined, action)
  expect(state).toEqual({ ...state, lengthAlert: action.isTrue })
})

test('should set true for duplicate alert', () => {
  const action = { type: 'DUPLICATE_ALERT', isTrue: true }
  const state = alertsReducer(undefined, action)
  expect(state).toEqual({ ...state, duplicateAlert: action.isTrue })
})

test('should set true for date alert', () => {
  const action = { type: 'DATE_ALERT', isTrue: true }
  const state = alertsReducer(undefined, action)
  expect(state).toEqual({ ...state, dateAlert: action.isTrue })
})

test('should set true for comment alert', () => {
  const action = { type: 'COMMENT_ALERT', isTrue: true }
  const state = alertsReducer(undefined, action)
  expect(state).toEqual({ ...state, commentAlert: action.isTrue })
})