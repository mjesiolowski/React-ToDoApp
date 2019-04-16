import { createStore, combineReducers } from 'redux'
import { taskReducer } from './taskReducer'
import { alertReducer } from './alertReducer'
import { editTask } from './taskActions'
// import { addInput } from './inputAction'
import { addInputReducer } from './addInputReducer';
import { editInputReducer } from './editInputReducer';

export const store = createStore(combineReducers({
   tasks: taskReducer,
   alerts: alertReducer,
   addInput: addInputReducer,
   editInput: editInputReducer,
}))

store.subscribe(() => console.log(store.getState()))
// store.dispatch(addTask("moje nowe zadanie"))
store.dispatch(editTask("123", { text: "po edycji" }))
// store.dispatch(removeTask('123'))
// store.dispatch(addInput('Dodany input'))
// store.dispatch({ type: 'DUPLICATE_ALERT' })
// store.dispatch({ type: 'LENGTH_ALERT' })


