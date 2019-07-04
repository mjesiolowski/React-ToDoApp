export const searchReducer = (state = [], action) => {
   switch (action.type) {
      case 'SEARCH_BUTTON':
         return [...action.tasks]
      case 'SEARCH_TASK':
         return state.filter(task => task.text.toLowerCase().includes(action.text.toLowerCase()) && task.active === true)
      default:
         return state
   }
}