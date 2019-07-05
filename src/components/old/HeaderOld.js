import React from 'react';
import moment from 'moment'
import { connect } from 'react-redux'
import { addTask } from '../redux/taskActions'
import { addInput } from '../redux/inputActions'
import { lengthAlert } from '../redux/alertActions'
import { duplicateAlert } from '../redux/alertActions'
import { searchAlert } from '../redux/alertActions'
import { searchButton } from '../redux/searchAction'
import { searchTask } from '../redux/searchAction'



class Header extends React.Component {
   state = {
      time: null
   }

   componentDidMount() {
      setInterval(() => {
         this.setState({
            time: moment().format('DD.MM.YYYY, HH:mm:ss')
         })
      }, 1000)
   }

   componentDidUpdate() {
      if (this.duplicateCheck())
         this.props.duplicateAlertAction(false)
      if (this.lengthCheck()) {
         this.props.lengthAlertAction(false)
      }
   }

   clearAlerts() {
      this.props.inputHandlerAction('')
      this.props.lengthAlertAction(false)
      this.props.duplicateAlertAction(false)
   }

   duplicateCheck() {
      return this.props.tasks.find(task => task.text.toLowerCase().trim() === this.props.inputValue.toLowerCase().trim() && task.active) === undefined
   }

   lengthCheck() {
      return this.props.inputValue.trim().length > 2
   }

   inputHandler(e) {
      return this.props.inputHandlerAction(e.target.value)
   }

   addTaskHandler(e) {
      e.preventDefault()
      if (this.lengthCheck() && this.duplicateCheck()) {
         this.props.addTaskAction(this.props.inputValue)
         this.clearAlerts()
      }
      else if (!this.lengthCheck()) { this.props.lengthAlertAction(true) }
      else { this.props.duplicateAlertAction(true) }
   }

   searchTaskHandler() {
      this.clearAlerts()
      this.props.searchButtonAction(this.props.tasks)
      this.props.searchTaskAction(this.props.inputValue)
      this.props.searchAlertAction(true)
   }


   render() {
      const {
         inputValue,
         duplicateAlertMsg,
         lengthAlertMsg,
      } = this.props

      return (<>
         <h1 className="header__title">React ToDoApp</h1>
         <p className="header__time">{this.state.time}</p>

         <form className="header__form" onSubmit={(e) => this.addTaskHandler(e)}>
            <input className="header__form__input" type="text" placeholder="Add or search your task here" value={inputValue} onChange={(e) => this.inputHandler(e)} autoFocus />

            <i className="fas fa-plus-circle header__form__icon"
               onClick={(e) => this.addTaskHandler(e)}></i>

            <i className="fas fa-search header__form__icon" onClick={() => this.searchTaskHandler()}></i>
         </form>

         {lengthAlertMsg && <p className="header__warning-info">Minimum 3 characters required!!</p>}
         {duplicateAlertMsg && <p className="header__warning-info">Task already on the list!</p>}


      </>);
   }
}

const mapStateToProps = state => {
   const { alerts, addInput } = state
   return {
      tasks: state.tasks,
      lengthAlertMsg: alerts.minimalTaskLengthAlert,
      duplicateAlertMsg: alerts.taskDuplicatedAlert,
      inputValue: addInput
   }
}

const mapDispatchToProps = dispatch => ({
   addTaskAction: text => dispatch(addTask(text)),
   searchButtonAction: tasks => dispatch(searchButton(tasks)),
   searchTaskAction: text => dispatch(searchTask(text)),
   lengthAlertAction: isTrue => dispatch(lengthAlert(isTrue)),
   duplicateAlertAction: isTrue => dispatch(duplicateAlert(isTrue)),
   searchAlertAction: isTrue => dispatch(searchAlert(isTrue)),
   inputHandlerAction: event => dispatch(addInput(event))
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);