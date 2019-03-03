import React from 'react';
import TasksToDo from './TasksToDo'
import DoneTasks from './DoneTasks'
import SearchedTasks from './SearchedTasks'


const TasksList = props => {
   const { tasksToDo, doneTask, searchStatus, returnHandler, searchedTasks, removedTask } = props

   const activeTasks = tasksToDo.filter(task => task.active)

   let doneTasks = tasksToDo.filter(task => !task.active)
   doneTasks = doneTasks.sort((taskA, taskB) => taskB.time - taskA.time).slice(0, 3)

   const active = activeTasks.map((task, index) =>
      (<TasksToDo
         key={task.id}
         task={task.text}
         id={task.id}
         index={index}
         done={doneTask}
         removed={removedTask} />))

   const done = doneTasks.map(task =>
      (<DoneTasks
         key={task.id}
         task={task.text} />))

   const searched = searchedTasks.map(task =>
      (<SearchedTasks
         key={task.id}
         task={task.text} />))


   return (
      <>
         <div className="tasksList tasksToDo">
            {
               !searchStatus ?
                  (active.length > 0 ?
                     <>
                        <h2 className="tasksList tasksToDo__title">Tasks to do:</h2>
                        <ul className="tasksList tasksToDo__list">{active}</ul>
                     </>
                     :
                     <h2>No tasks on list!</h2>)
                  :
                  <>
                     <h2>Search results:</h2>
                     <ul>{searched}</ul>
                     {!searchedTasks.length && <p>No results</p>}
                     <i className="fas fa-arrow-alt-circle-left" onClick={returnHandler}></i>
                  </>
            }

         </div>

         {!searchStatus ?
            <>
               <div className="doneTasks">
                  <h2>Last 3 done tasks:</h2>
                  <ul>{done}</ul>
               </div>
            </>
            : null}


      </>
   );
}

export default TasksList

