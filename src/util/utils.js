export const getRandomId = () => {
  const S = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  let id = '';

  for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * S.length);
    id += S.charAt(index);
  }

  return id;
}