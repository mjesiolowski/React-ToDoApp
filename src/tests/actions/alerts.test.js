import { lengthAlert, duplicateAlert, dateAlert, commentAlert } from '../../actions/alerts'

test('should set lengthAlert action object', () => {
   const action = lengthAlert(true)
   expect(action).toEqual({
      type: 'LENGTH_ALERT',
      isTrue: true
   })
})

test('should set duplicateAlert action object', () => {
   const action = duplicateAlert(true)
   expect(action).toEqual({
      type: 'DUPLICATE_ALERT',
      isTrue: true
   })
})

test('should set dateAlert action object', () => {
   const action = dateAlert(true)
   expect(action).toEqual({
      type: 'DATE_ALERT',
      isTrue: true
   })
})

test('should set commentAlert action object', () => {
   const action = commentAlert(true)
   expect(action).toEqual({
      type: 'COMMENT_ALERT',
      isTrue: true
   })
})