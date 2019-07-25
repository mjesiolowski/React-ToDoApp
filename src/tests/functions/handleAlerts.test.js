import { handleAlerts } from '../../functions/handleAlerts'

const dispatch = jest.fn()


test('should handle lengthAlert', () => {
  const alert = 'lengthAlert'
  const alerts = handleAlerts(alert, dispatch)
  const dateAlert = { "isTrue": false, "type": "DATE_ALERT" }
  const lengthAlert = { "isTrue": true, "type": "LENGTH_ALERT" }

  expect(dispatch).toHaveBeenCalledWith(lengthAlert)
  expect(dispatch).toHaveBeenLastCalledWith(dateAlert)
  expect(alerts).toEqual(false)
})

test('should handle duplicateAlert', () => {
  const alert = 'duplicateAlert'
  const alerts = handleAlerts(alert, dispatch)
  const dateAlert = { "isTrue": false, "type": "DATE_ALERT" }
  const duplicateAlert = { "isTrue": true, "type": "DUPLICATE_ALERT" }

  expect(dispatch).toHaveBeenCalledWith(duplicateAlert)
  expect(dispatch).toHaveBeenLastCalledWith(dateAlert)
  expect(alerts).toEqual(false)
})

test('should handle dateAlert', () => {
  const alert = 'dateAlert'
  const alerts = handleAlerts(alert, dispatch)
  const dateAlert = { "isTrue": true, "type": "DATE_ALERT" }
  const duplicateAlert = { "isTrue": false, "type": "DUPLICATE_ALERT" }

  expect(dispatch).toHaveBeenCalledWith(dateAlert)
  expect(dispatch).toHaveBeenLastCalledWith(duplicateAlert)
  expect(alerts).toEqual(false)
})

test('should handle taskVlidated', () => {
  const alert = 'taskValidated'
  const alerts = handleAlerts(alert, dispatch)
  const dateAlert = { "isTrue": false, "type": "DATE_ALERT" }
  const lengthAlert = { "isTrue": false, "type": "LENGTH_ALERT" }

  expect(dispatch).toHaveBeenCalledWith(lengthAlert)
  expect(dispatch).toHaveBeenLastCalledWith(dateAlert)
  expect(alerts).toEqual(true)
})