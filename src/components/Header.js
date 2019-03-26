import React from 'react';
import moment from 'moment'


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

   render() {
      const {
         alert,
         duplicate,
         value,
         handleAddTaskButton,
         handleHeaderInputValue,
         handleHeaderInputSubmit,
         handleSearchTaskButton,
      }
         = this.props

      return (<>
         <h1 className="header__title">React ToDoApp</h1>
         <p className="header__time">{this.state.time}</p>

         <form className="header__form" onSubmit={handleHeaderInputSubmit}>
            <input className="header__form__input" type="text" placeholder="Add or search your task here" value={value} onChange={handleHeaderInputValue} autoFocus />

            <i className="fas fa-plus-circle header__form__icon" onClick={handleAddTaskButton}></i>
            <i className="fas fa-search header__form__icon" onClick={handleSearchTaskButton}></i>
         </form>

         {alert && <p className="header__warning-info">Minimum 3 characters required!!</p>}
         {duplicate && <p className="header__warning-info">Task already on the list!</p>}


      </>);
   }
}


export default Header;