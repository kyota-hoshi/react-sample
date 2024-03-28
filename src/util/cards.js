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

export const fetchCards = () => {
  return initialCards;
};