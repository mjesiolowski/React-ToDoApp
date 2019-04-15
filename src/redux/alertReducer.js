const alertReducerDefaultState = {
   minimalTaskLengthAlert: false,
   taskDuplicatedAlert: false,
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

      default:
         return state
   }
}