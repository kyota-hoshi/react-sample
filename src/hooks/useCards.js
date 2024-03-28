import React, { useState, useEffect, createContext, useContext } from "react";
import { fetchCards } from "../util/cards";
import { getRandomId } from "../util/utils";

const CardsContext = createContext();

export const useCards = () => {
  const [cards, setCards] = useState([]);

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

  const toggleCardStatus = (cardId) => {
    const newCards = cards.map(c => {
      if (c.id === cardId) {
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

  const addCard = (content) => {
    const newCards = [
      ...cards,
      {
        id: getRandomId(),
        content,
        status: 'Not Ready',
      }
    ]
    setCards(newCards);
  }

  useEffect(() => {
    setCards(fetchCards());
  }, []);

  const CardsProvider = ({ children }) => {
    return (
      <CardsContext.Provider
       value={{
        cards,
        setCards,
        toggleCardStatus,
        addCard,
       }}
      >
        {children}
      </CardsContext.Provider>
    )
  }

  return {
    CardsProvider,
    ...useContext(CardsContext),
  }
};
