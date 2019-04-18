import React from 'react';
import { connect } from 'react-redux'
import { editTask, removeTask, doneTask } from '../redux/taskActions'
import { editInput } from '../redux/inputActions'
import { editAlert } from '../redux/alertActions'


const TaskToDo = props => {

   const {
      editTaskAction,
      inputHandlerAction,
      doneTaskAction,
      inputValue,
      editAlertMsg,
      editAlertAction,
      removeTaskAction,
      // editButtonHandler,
      // editedValue,
      // editTaskHandler,
      id,
      index,
      // inputHandler,
      tasks,
      taskText,
      taskEdited,
   } = props

   // const checkIfEdited = () => props.tasks.filter(task => task.edited).length

   const inputHandler = (e) => {
      editAlertAction(false)
      inputHandlerAction(e.target.value)
   }

   const duplicateCheck = () => tasks.find(task => {
      if (task.id !== props.id) return task.text.toLowerCase() === inputValue.toLowerCase()
      else return null
   }) === undefined

   const lengthCheck = () => props.inputValue.trim().length > 2

   const editButtonHandler = (id, edited) => {
      inputHandlerAction(taskText)
      editTaskAction(id, edited)
   }

   const editTaskHandler = (e, id) => {
      e.preventDefault()
      if (lengthCheck() && duplicateCheck()) {
         editAlertAction(false)
         editTaskAction(id, { text: inputValue.trim() })
         editTaskAction(id, { edited: false })
      } else editAlertAction(true)
   }

   return (
      <>
         {taskEdited ? <form onSubmit={(e) => editTaskHandler(e, props.id)}>
            <input
               className={editAlertMsg ? "taskToDo__input taskToDo__input--warning" : "taskToDo__input"}
               value={inputValue}
               onChange={(e) => inputHandler(e)}
               autoFocus />
         </form>
            :
            <li className="tasksToDo__item">
               {index + 1}. {taskText}
               {taskText.length > 10 && <br></br>}
               <i id={id} className="fas fa-check tasksToDo__icon" onClick={() => doneTaskAction(props.id)}></i>
               <i id={id} className="fas fa-trash tasksToDo__icon" onClick={() => removeTaskAction(props.id)}></i>
               <i id={id} className="fas fa-edit tasksToDo__icon" onClick={() => editButtonHandler(id, { edited: 'true' })}></i>
            </li>}

      </>
   );
};

const mapStateToProps = state => {
   const { editInput, tasks, alerts } = state
   return {
      inputValue: editInput,
      tasks,
      editAlertMsg: alerts.editAlert
   }
}

const mapDispatchToProps = dispatch => ({
   editTaskAction: (id, update) => dispatch(editTask(id, update)),
   removeTaskAction: id => dispatch(removeTask(id)),
   doneTaskAction: id => dispatch(doneTask(id)),
   inputHandlerAction: text => dispatch(editInput(text)),
   editAlertAction: isTrue => dispatch(editAlert(isTrue))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskToDo);

