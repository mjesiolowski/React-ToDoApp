import uuid from 'uuid'
import moment from 'moment'

const defaultTasks = [{
   id: '123',
   name: "Task 1",
   completed: false,
   completedAt: null,
   createdAt: moment().subtract(1, 'day').valueOf(),
   deadline: moment().add(3, 'years').valueOf(),
   isPriority: false,
   comments: []
},
{
   id: uuid(),
   name: "Task 2",
   completed: false,
   completedAt: null,
   createdAt: moment().subtract(3, 'days').valueOf(),
   deadline: moment().add(2, 'years').valueOf(),
   isPriority: true,
   comments: [{
      beingEdited: false,
      createdAt: 1562845281035,
      id: "f612c3a5-4ae8-4c86-9a2b-513e2a0fed99",
      text: "test comment"
   }]
},
{
   id: uuid(),
   name: "Task 3",
   completed: false,
   completedAt: null,
   createdAt: moment().subtract(2, 'days').valueOf(),
   deadline: moment().add(1, 'year').valueOf(),
   isPriority: false,
   comments: []
},
]

const tasksReducerDefaultState = () => {
   try {
      const tasksJSON = localStorage.getItem('tasks')
      if (tasksJSON === null) {
         return defaultTasks
      }

      return JSON.parse(tasksJSON)
   } catch (e) { }
}


export const tasksReducer = (state = tasksReducerDefaultState(), action) => {
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
                  ...task.completed = true,
                  ...task.completedAt = moment().valueOf()
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