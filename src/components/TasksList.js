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
                        <h2 className="tasksToDo__title">Tasks to do:</h2>
                        <ul className="tasksToDo__list">{active}</ul>
                     </>
                     :
                     <h2 className="searchedTasks__title">No tasks on yourgit list!</h2>)
                  :
                  <>
                     <h2 className="searchedTasks__title">Search results:</h2>
                     <ul className="searchedTasks__list">{searched}</ul>
                     {!searchedTasks.length && <p className="searchedTasks__item">No results!</p>}
                     <i className="fas fa-arrow-alt-circle-left searchedTasks__icon" onClick={returnHandler}></i>
                  </>
            }

         </div>

         {!searchStatus ?
            <>
               <div className="doneTasks">
                  <h2 className="doneTasks__title">Last 3 done tasks:</h2>
                  <ul className="doneTasks__list">{done}</ul>
               </div>
            </>
            : null}


      </>
   );
}

export default TasksList

