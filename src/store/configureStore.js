import { createStore, combineReducers } from 'redux'
import { tasksReducer } from '../reducers/tasks'
import { alertsReducer } from '../reducers/alerts'
import { filtersReducer } from '../reducers/filters'

const store = createStore(
   combineReducers({
      tasks: tasksReducer,
      alerts: alertsReducer,
      filters: filtersReducer,
   }))


export default () => store