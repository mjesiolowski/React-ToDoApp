import uuid from 'uuid'

const taskReducerDefaultState = [{
      id: '123',
      text: "Task 1",
      active: true,
      edited: false,
   },
   {
      id: uuid(),
      text: "Task 2",
      active: true,
      edited: false,
   },
   {
      id: uuid(),
      text: "Task 3",
      active: true,
      edited: false,
   },
]

export const taskReducer = (state = taskReducerDefaultState, action) => {
   switch (action.type) {
      case 'ADD_TASK':
         return [
            ...state,
            action.task
         ]
      case 'EDIT_TASK':
         return state.map(task => {
            if (task.id === action.id) {
               return {
                  ...task,
                  ...action.update
               }
            } else {
               return task
            }
         })
      case 'REMOVE_TASK':
         return state.filter(task => task.id !== action.id)

      default:
         return state
   }
}