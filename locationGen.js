import city from './src/city.js';

export function generateloc() {
  const randomIndex = Math.floor(Math.random() * city.length);
  return city[randomIndex];
}

export default generateloc;