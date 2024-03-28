import React, { useState, useContext } from "react";
import { CardsContext } from "./App";

function Header() {
  const { addCard } = useContext(CardsContext);
  const [value, setValue] = useState('');

  return (
    <div className='header'>
      <h1 className='title'>Todo List</h1>
      <div className="addCardForm">
        <input
          className="addCardInput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="addCardButton"
          onClick={() => addCard(value)}
        >追加</button>
      </div>
    </div>
  )
}

export default Header;