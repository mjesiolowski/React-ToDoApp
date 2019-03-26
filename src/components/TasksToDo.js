import React from 'react';


const TasksToDo = props => {
   const {
      doneTaskHandler,
      editButtonHandler,
      editedValue,
      editTaskHandler,
      id,
      index,
      inputHandler,
      task,
      taskEdited,
      removeButtonHandler,
   } = props



   return (
      <>
         {taskEdited ? <form onSubmit={(e) => editTaskHandler(e, id)}>
            <input className="taskToDo__input" value={editedValue} onChange={inputHandler} autoFocus />
         </form>
            :
            <li className="tasksToDo__item">
               {index + 1}. {task}
               {task.length > 10 && <br></br>}
               <i id={id} className="fas fa-check tasksToDo__icon" onClick={() => doneTaskHandler(id)}></i>
               <i id={id} className="fas fa-trash tasksToDo__icon" onClick={() => removeButtonHandler(id)}></i>
               <i id={id} className="fas fa-edit tasksToDo__icon" onClick={() => editButtonHandler(id, task)}></i>
            </li>}

      </>
   );
};



export default TasksToDo;

