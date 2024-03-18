import React from "react";

function Card(props) {
  return (
    <div className='card'>
      <input className='todocheck' type='checkbox' />
      <p className='todocontent'>{props.content}</p>
    </div>
  )
}

export default Card;