import { createStore, combineReducers } from 'redux'
import { taskReducer } from './taskReducer'
import { alertReducer } from './alertReducer'
// import { editTask } from './taskActions'
// import { addInput } from './inputAction'
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

store.subscribe(() => console.log(store.getState()))



