const filtersReducerDefaultState = {
   sortBy: 'name',
   filteredText: '',
}


export const filtersReducer = (state = filtersReducerDefaultState, action) => {
   switch (action.type) {
      case 'SET_TEXT_FILTER':
         return {
            ...state,
            filteredText: action.text
         }
      case 'SET_SORT_BY':
         return {
            ...state,
            sortBy: action.sortBy
         }
      default: return state
   }
}