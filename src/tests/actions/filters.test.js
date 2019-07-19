import { setTextFilter, setSortBy } from '../../actions/filters'

test('should set text filter', () => {
   const text = 'test'
   const action = setTextFilter(text)
   expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text
   })
})

test('should set sortBy value', () => {
   const sortBy = 'name'
   const action = setSortBy(sortBy)
   expect(action).toEqual({
      type: 'SET_SORT_BY',
      sortBy
   })
})