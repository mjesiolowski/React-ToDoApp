export const editInputReducer = (state = '', action) => {
   switch (action.type) {
      case 'EDIT_INPUT':
         return action.text
      default:
         return state
   }
}