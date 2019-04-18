import React from 'react';
import TaskToDo from './TaskToDo'
import DoneTasks from './DoneTasks'
import SearchedTasks from './SearchedTasks'
import { connect } from 'react-redux'
import { searchAlert } from '../redux/alertActions'


const TasksList = props => {
   const {
      editedValue,
      handleEditButton,
      handleEditingTask,
      handleEditInputValue,
      handleDoneTaskButton,
      handleRemoveTaskButton,
      // handleReturnButton,
      // searchSection,

      // tasksToDo,

      tasks,
      searchAlertAction,
      searchAlertMsg,
      searchedTasks,
   } = props

   // const activeTasks = tasksToDo.filter(task => task.active)

   const handleReturnButton = () => {
      searchAlertAction(false)
   }

   let doneTasks = tasks.filter(task => !task.active)
   doneTasks = doneTasks.sort((taskA, taskB) => taskB.time - taskA.time).slice(0, 3)


   const taskToDo = tasks.filter(task => task.active).map((task, index) =>
      (
         <TaskToDo
            key={task.id}
            editedValue={editedValue}
            index={index}

            id={task.id}
            taskText={task.text}
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

            {!searchAlertMsg ?
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
                  <>
                     <h2 className="searchedTasks__title">No tasks on your list!</h2>
                     <div className="doneTasks">
                        <h2 className="doneTasks__title">Last 3 done tasks:</h2>
                        <ul className="doneTasks__list">{done}</ul>
                     </div>
                  </>)
               :
               <>
                  <h2 className="searchedTasks__title">Search results:</h2>
                  <ul className="searchedTasks__list">{searched}</ul>
                  {!searchedTasks.length && <p className="searchedTasks__item">No results!</p>}
                  <i className="fas fa-arrow-alt-circle-left searchedTasks__icon" onClick={handleReturnButton}></i>
               </>}
         </div>
      </>
   );
}

const mapDispatchToProps = dispatch => ({
   searchAlertAction: isTrue => dispatch(searchAlert(isTrue))
})

const mapStateToProps = state => {
   const { tasks, alerts, searchedTasks } = state
   return {
      tasks,
      searchAlertMsg: alerts.searchAlert,
      searchedTasks
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(TasksList)

