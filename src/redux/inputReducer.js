export const inputReducer = (state = '', action) => {
   switch (action.type) {
      case 'ADD_INPUT':
         return action.text
      default:
         return state
   }
}