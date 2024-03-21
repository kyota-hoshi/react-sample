import React from "react";
import Card from "./Card";

const { useState, useEffect } = React;

function Body() {
  const initialCards = [
    {
      id: '1',
      content: 'Study English',
      status: 'Not Ready',
    },
    {
      id: '2',
      content: 'Study React',
      status: 'Ready',
    },
    {
      id: '3',
      content: 'Clean Room',
      status: 'Compleated',
    },
  ]

  const fetchCards = () => {
    return initialCards;
  };

  const toggleStatus = (status) => {
    switch(status) {
      case 'Not Ready':
        return 'Ready';
      case 'Ready':
        return 'Compleated';
      case 'Compleated':
        return 'Not Ready';
      default:
        throw new Error('無効なステータスです');
    }
  }

  const handleToggleStatus = (id) => {
    const newCards = cards.map(c => {
      if (c.id === id) {
        return {
          ...c,
          status: toggleStatus(c.status),
        };
      } else {
        return c;
      }
    });
    setCards(newCards);
  }

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cards = fetchCards();
    setCards(cards);
  }, []);

  return (
    <div className='body'>
      {cards.map(c => {
        return (
          <Card
            card={c}
            toggleStatus={handleToggleStatus}
          />
        )
      })}
    </div>
  )
}

export default Body