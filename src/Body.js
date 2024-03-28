import React, { useContext } from "react";
import Card from "./Card";
import { CardsContext } from "./App";

function Body() {

  const { cards } = useContext(CardsContext);

  return (
    <div className='body'>
      {cards.map(c => {
        return (
          <Card
            key={c.id}
            card={c}
          />
        )
      })}
    </div>
  )
}

export default Body