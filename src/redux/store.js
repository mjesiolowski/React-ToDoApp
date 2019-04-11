import { createStore, combineReducers } from 'redux'
import { tasksReducer } from './tasksReducer'
import { addTask, editTask, removeTask } from './tasksActions'

export const store = createStore(combineReducers({ tasks: tasksReducer }))

store.subscribe(() => console.log(store.getState()))
store.dispatch(addTask("moje nowe zadanie"))
store.dispatch(editTask("123", { text: "po edycji" }))
store.dispatch(addTask("moje nowe zadanie"))
store.dispatch(removeTask("123"))
