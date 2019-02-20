import React from 'react';


const Input = props => {
   const { value, input, add, submit } = props
   return (
      <>
         <form onSubmit={submit}>
            <input type="text" placeholder="Add task here" value={value} onChange={input} />
            <i className="fas fa-plus-circle" onClick={add}></i>
            <i className="fas fa-search"></i>
         </form>
      </>
   );
}

export default Input;