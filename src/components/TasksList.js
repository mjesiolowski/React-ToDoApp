import React from 'react';
import TaskToDo from './TaskToDo'
import DoneTasks from './DoneTasks'
import SearchedTasks from './SearchedTasks'
import { connect } from 'react-redux'


const TasksList = props => {
   const {
      editedValue,
      handleEditButton,
      handleEditingTask,
      handleEditInputValue,
      handleDoneTaskButton,
      handleRemoveTaskButton,
      handleReturnButton,
      searchSection,
      searchedTasks,
      tasksToDo,
   } = props

   // const activeTasks = tasksToDo.filter(task => task.active)

   let doneTasks = tasksToDo.filter(task => !task.active)
   doneTasks = doneTasks.sort((taskA, taskB) => taskB.time - taskA.time).slice(0, 3)

   const taskToDo = props.tasks.map((task, index) =>
      (
         <TaskToDo
            key={task.id}
            editedValue={editedValue}
            index={index}

            id={task.id}
            task={task.text}
            taskEdited={task.edited}


            doneTaskHandler={handleDoneTaskButton}
            editButtonHandler={handleEditButton}
            editTaskHandler={handleEditingTask}
            inputHandler={handleEditInputValue}
            removeButtonHandler={handleRemoveTaskButton}
         />))

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
         <div className="tasksList">

            {
               !searchSection ?
                  (taskToDo.length > 0 ?
                     <>
                        <div className="tasksToDo">
                           <h2 className="tasksToDo__title">Tasks to do:</h2>
                           <ul className="tasksToDo__list">{taskToDo}</ul>
                        </div>

                        <div className="doneTasks">
                           <h2 className="doneTasks__title">Last 3 done tasks:</h2>
                           <ul className="doneTasks__list">{done}</ul>
                        </div>
                     </>
                     :
                     <h2 className="searchedTasks__title">No tasks on your list!</h2>)
                  :
                  <>
                     <h2 className="searchedTasks__title">Search results:</h2>
                     <ul className="searchedTasks__list">{searched}</ul>
                     {!searchedTasks.length && <p className="searchedTasks__item">No results!</p>}
                     <i className="fas fa-arrow-alt-circle-left searchedTasks__icon" onClick={handleReturnButton}></i>
                  </>
            }

         </div>
      </>
   );
}

const mapStateToProps = state => {
   return {
      tasks: state.tasks
   }
}

export default connect(mapStateToProps)(TasksList)

