import { createStore, combineReducers } from 'redux'
import { taskReducer } from '../reducers/taskReducer'
// import { alertReducer } from '../reducers/alertReducer'
// import { addInputReducer } from './addInputReducer';
// import { editInputReducer } from './editInputReducer';
// import { searchReducer } from './searchReducer';

const store = createStore(
   combineReducers({
      tasks: taskReducer,
      // alerts: alertReducer,
      // searchedTasks: searchReducer,
      // addInput: addInputReducer,
      // editInput: editInputReducer,
   }))


export default () => store