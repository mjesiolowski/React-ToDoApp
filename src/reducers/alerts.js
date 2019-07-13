const alertsReducerDefaultState = {
   lengthAlert: false,
   duplicateAlert: false,
   dateAlert: false,
   commentAlert: false,
}

export const alertsReducer = (state = alertsReducerDefaultState, action) => {
   switch (action.type) {
      case 'LENGTH_ALERT':
         return {
            ...state,
            lengthAlert: action.isTrue
         }

      case 'DUPLICATE_ALERT':
         return {
            ...state,
            duplicateAlert: action.isTrue
         }

      case 'DATE_ALERT':
         return {
            ...state,
            dateAlert: action.isTrue
         }

      case 'COMMENT_ALERT':
         return {
            ...state,
            commentAlert: action.isTrue
         }

      default:
         return state
   }
}