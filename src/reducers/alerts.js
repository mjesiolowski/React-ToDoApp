const alertsReducerDefaultState = {
   lengthAlert: false,
   duplicateAlert: false,
   dateAlert: false,
   // editAlert: false,
   // searchAlert: false,
   // isEditionActive: false,
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
      // case 'EDIT_ALERT':
      //    return {
      //       ...state,
      //       editAlert: action.isTrue
      //    }

      // case 'SEARCH_ALERT':
      //    return {
      //       ...state,
      //       searchAlert: action.isTrue
      //    }

      // case 'EDITION_ACTIVE':
      //    return {
      //       isEditionActive: action.isTrue
      //    }

      default:
         return state
   }
}