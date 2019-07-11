import { createStore, combineReducers } from 'redux'
import { tasksReducer } from '../reducers/tasks'
import { alertsReducer } from '../reducers/alerts'
import { filtersReducer } from '../reducers/filters'
// import { alertReducer } from '../reducers/alertReducer'
// import { addInputReducer } from './addInputReducer';
// import { editInputReducer } from './editInputReducer';
// import { searchReducer } from './searchReducer';

const store = createStore(
   combineReducers({
      tasks: tasksReducer,
      alerts: alertsReducer,
      filters: filtersReducer
      // addInput: addInputReducer,
      // editInput: editInputReducer,
   }))


export default () => store