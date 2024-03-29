import './App.css';
import { useState, useEffect, createContext } from 'react';
import Header from './Header';
import Body from './Body';
import { getRandomId } from './util/utils';
import { fetchCards } from './util/cards';
export const CardsContext = createContext();

function App() {
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

  return (
    <CardsContext.Provider
      value={{
      cards,
      setCards,
      toggleCardStatus,
      addCard,
      }}
    >
      <Header />
      <Body />
    </CardsContext.Provider>
  );
}

export default App;
