import React from 'react';


const Input = props => {
   const { value, input, add, submit, alert, search } = props
   return (
      <form onSubmit={submit}>
         <input type="text" placeholder="Add task here" value={value} onChange={input} />
         <i className="fas fa-plus-circle" onClick={add}></i>
         <i className="fas fa-search" onClick={search}></i>
         {alert && <p>Too short!</p>}
      </form>

   );
}

export default Input;