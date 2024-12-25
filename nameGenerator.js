import { lastName, names } from './src/names.js'; // Correct path

export function generateName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomIndex2 = Math.floor(Math.random() * lastName.length);
  return lastName[randomIndex2] + ' ' + names[randomIndex];
}

export default generateName;