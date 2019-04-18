const alertReducerDefaultState = {
   minimalTaskLengthAlert: false,
   taskDuplicatedAlert: false,
   editAlert: false,
   searchAlert: false
}

export const alertReducer = (state = alertReducerDefaultState, action) => {
   switch (action.type) {
      case 'LENGTH_ALERT':
         return {
            ...state,
            minimalTaskLengthAlert: action.isTrue
         }

      case 'DUPLICATE_ALERT':
         return {
            ...state,
            taskDuplicatedAlert: action.isTrue
         }
      case 'EDIT_ALERT':
         return {
            ...state,
            editAlert: action.isTrue
         }

      case 'SEARCH_ALERT':
         return {
            ...state,
            searchAlert: action.isTrue
         }

      default:
         return state
   }
}