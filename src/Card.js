import React from "react";

function Card({ card, toggleStatus }) {
  return (
    <div className='card'>
      <div className="todoIcon">✔︎</div>
      <div className='todocontent'>{card.content}</div>
      <div className="todoStatus">
        <span>status:</span>
        <button
          className="statusButton"
          onClick={() => toggleStatus(card.id)}
        >
          {card.status}
        </button>
      </div>
    </div>
  )
}

export default Card;