import React from 'react';


const Header = props => {
   const { value, input, add, submit, alert, search, duplicate } = props
   return (
      <>
         <h1 className="header header__title">React ToDoApp</h1>

         <form className="header header__form" onSubmit={submit}>
            <input className="header header__input" type="text" placeholder="Add or search your task here" value={value} onChange={input} />

            <i className="fas fa-plus-circle header header__icon" onClick={add}></i>
            <i className="fas fa-search header header__icon" onClick={search}></i>
         </form>

         {alert && <p className="header header__warning-info">Minimum 3 characters required!!</p>}
         {duplicate && <p className="header header__warning-info">Task already on the list!</p>}


      </>

   );
}

export default Header;