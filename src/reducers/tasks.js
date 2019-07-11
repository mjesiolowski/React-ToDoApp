import uuid from 'uuid'
import moment from 'moment'

const tasksReducerDefaultState = [{
   id: '123',
   name: "Task 1",
   active: true,
   createdAt: moment().subtract(1, 'day').valueOf(),
   dueDate: moment().add(2, 'days').valueOf(),
   isPriority: false,
   comments: []

},
{
   id: uuid(),
   name: "Task 2",
   active: true,
   createdAt: moment().subtract(3, 'days').valueOf(),
   dueDate: moment().add(4, 'days').valueOf(),
   isPriority: false,
   comments: []
},
{
   id: uuid(),
   name: "Task 3",
   active: true,
   createdAt: moment().subtract(2, 'days').valueOf(),
   dueDate: moment().add(1, 'day').valueOf(),
   isPriority: false,
   comments: []
},
]

export const tasksReducer = (state = tasksReducerDefaultState, action) => {
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

      case 'DONE_TASK':
         return state.map(task => {
            if (task.id === action.id) {
               return {
                  ...task,
                  ...task.active = false,
                  ...task.time = new Date().getTime()
               }
            } else {
               return task
            }
         })
      case 'REMOVE_TASK':
         return state.filter(task => task.id !== action.id)

      case 'ADD_COMMENT':
         return state.map((task) => {
            if (task.id === action.id) return {
               ...task,
               comments: [
                  ...task.comments,
                  action.comment
               ]
            }
            else return task
         })


      case 'EDIT_COMMENT':
         return state.map((task) => {

            if (task.id === action.id) {
               const updatedComments = task.comments.slice().filter(comment => comment.id !== action.update.id)

               return {
                  ...task,
                  comments: [
                     ...updatedComments,
                     action.update
                  ]
               }
            }
            else return task
         })

      case 'DELETE_COMMENT':
         return state.map((task) => {

            if (task.id === action.taskId) {
               const updatedComments = task.comments.slice().filter(comment => comment.id !== action.commentId)

               return {
                  ...task,
                  comments: [
                     ...updatedComments
                  ]
               }
            }
            else return task
         })

      default:
         return state
   }
}