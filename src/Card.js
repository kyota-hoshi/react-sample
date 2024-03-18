import React from "react";

const { useState } = React;

function Card(props) {
  const [todoStatus, setTodoStatus] = useState('Not Ready'); 
  
  const toggleStatus = () => {
    switch(todoStatus) {
      case 'Not Ready':
        setTodoStatus('Ready');
        break;
      case 'Ready':
        setTodoStatus('Compleated');
        break;
      case 'Compleated':
        setTodoStatus('Not Ready')
        break;
      default:
        break;
    }
  }
  
  return (
    <div className='card'>
      <div className="todoIcon">✔︎</div>
      <div className='todocontent'>{props.content}</div>
      <div className="todoStatus">
        <span>status:</span>
        <button
          className="statusButton"
          onClick={() => toggleStatus()}
        >
          {todoStatus}
        </button>
      </div>
    </div>
  )
}

export default Card;