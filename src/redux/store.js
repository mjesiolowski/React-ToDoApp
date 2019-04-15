import { createStore, combineReducers } from 'redux'
import { taskReducer } from './taskReducer'
import { alertReducer } from './alertReducer'
import { editTask } from './taskActions'
import { addInput } from './inputAction'
import { inputReducer } from './inputReducer';

export const store = createStore(combineReducers({
   tasks: taskReducer,
   alerts: alertReducer,
   input: inputReducer,
}))

store.subscribe(() => console.log(store.getState()))
// store.dispatch(addTask("moje nowe zadanie"))
store.dispatch(editTask("123", { text: "po edycji" }))
// store.dispatch(addInput('Dodany input'))
// store.dispatch({ type: 'DUPLICATE_ALERT' })
// store.dispatch({ type: 'LENGTH_ALERT' })


