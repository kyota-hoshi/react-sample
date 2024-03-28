import React, { useContext } from "react";
import { CardsContext } from "./App";

function Card({ card }) {
  const { toggleCardStatus } = useContext(CardsContext);

  return (
    <div className='card'>
      <div className="todoIcon">✔︎</div>
      <div className='todocontent'>{card.content}</div>
      <div className="todoStatus">
        <span>status:</span>
        <button
          className="statusButton"
          onClick={() => toggleCardStatus(card.id)}
        >
          {card.status}
        </button>
      </div>
    </div>
  )
}

export default Card;