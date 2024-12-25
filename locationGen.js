import { addresses } from './src/address.js'


export function generateloc() {
  const randomIndex = Math.floor(Math.random() * addresses.length);
  return addresses[randomIndex];
}

export default generateloc;