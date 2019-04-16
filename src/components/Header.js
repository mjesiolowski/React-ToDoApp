import React from 'react';
// import moment from 'moment'
import { connect } from 'react-redux'
import { addTask } from '../redux/taskActions'
import { addInput } from '../redux/inputActions'
import { lengthAlert } from '../redux/alertActions'
import { duplicateAlert } from '../redux/alertActions'



class Header extends React.Component {
   state = {
      time: null
   }

   // componentDidMount() {
   //    setInterval(() => {
   //       this.setState({
   //          time: moment().format('DD.MM.YYYY, HH:mm:ss')
   //       })
   //    }, 1000)
   // }

   componentDidUpdate() {
      if (this.duplicateCheck())
         this.props.duplicateAlertAction(false)
      if (this.lengthCheck()) {
         this.props.lengthAlertAction(false)
      }
   }

   inputHandler(e) {
      return this.props.inputHandlerAction(e.target.value)
   }

   addTaskHandler(e) {
      e.preventDefault()
      if (this.lengthCheck() && this.duplicateCheck()) {
         this.props.addTaskAction(this.props.inputValue)
         this.props.inputHandlerAction('')
         this.props.lengthAlertAction(false)
         this.props.duplicateAlertAction(false)
      }
      else if (!this.lengthCheck()) { this.props.lengthAlertAction(true) }
      else { this.props.duplicateAlertAction(true) }

   }

   duplicateCheck() {
      return this.props.tasks.find(task => task.text.toLowerCase() === this.props.inputValue.toLowerCase()) === undefined
   }

   lengthCheck() {
      return this.props.inputValue.trim().length > 2
   }

   render() {
      const {
         inputValue,
         // alert,
         duplicateAlertMsg,
         lengthAlertMsg,
         // value,
         // handleAddTaskButton,
         // handleHeaderInputValue,
         // handleHeaderInputSubmit,
         handleSearchTaskButton,
      }
         = this.props

      return (<>
         <h1 className="header__title">React ToDoApp</h1>
         <p className="header__time">{this.state.time}</p>

         <form className="header__form" onSubmit={(e) => this.addTaskHandler(e)}>
            <input className="header__form__input" type="text" placeholder="Add or search your task here" value={inputValue} onChange={(e) => this.inputHandler(e)} autoFocus />

            <i className="fas fa-plus-circle header__form__icon"
               onClick={(e) => this.addTaskHandler(e)}></i>

            <i className="fas fa-search header__form__icon" onClick={handleSearchTaskButton}></i>
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
   lengthAlertAction: isTrue => dispatch(lengthAlert(isTrue)),
   duplicateAlertAction: isTrue => dispatch(duplicateAlert(isTrue)),
   inputHandlerAction: event => dispatch(addInput(event))
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);