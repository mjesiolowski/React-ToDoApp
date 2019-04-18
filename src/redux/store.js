import { createStore, combineReducers } from 'redux'
import { taskReducer } from './taskReducer'
import { alertReducer } from './alertReducer'
import { addInputReducer } from './addInputReducer';
import { editInputReducer } from './editInputReducer';
import { searchReducer } from './searchReducer';

export const store = createStore(combineReducers({
   tasks: taskReducer,
   alerts: alertReducer,
   searchedTasks: searchReducer,
   addInput: addInputReducer,
   editInput: editInputReducer,
}))




