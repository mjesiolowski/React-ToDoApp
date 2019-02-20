import React from 'react';


const Input = props => {
   const { value, add } = props
   return (
      <>
         <form>
            <input type="text" placeholder="Add task here" value={value} onChange={add} />
            <i className="fas fa-plus-circle"></i>
            <i className="fas fa-search"></i>
         </form>
      </>
   );
}

export default Input;