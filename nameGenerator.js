import { lastName, names } from './src/names.js';
import { a, funcTrans } from './translate.js';
import birthGenerator from "./birthGenerator.js"

// Randomize Name from arrray

export function generateName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomIndex2 = Math.floor(Math.random() * lastName.length);
  return lastName[randomIndex2] + ' ' + names[randomIndex];
}

// Translates to Latin

export function emailGen() {
  let generatedBirth = birthGenerator();
  let mailbirth = generatedBirth.split('').reverse().join('').match(/\d{4}/)[0].split('').reverse().join('')
  const generatedName = generateName();
  let latin = funcTrans(generatedName);
  let last = latin.toLowerCase().slice(latin.indexOf(" ") + 1);
  let generatedEmail = (last + mailbirth + '@gmail.com')
  return { generatedName, generatedBirth, mailbirth, generatedEmail};
}

const { generatedName, generatedBirth, generatedEmail } = emailGen();

export { generatedName, generatedBirth, generatedEmail };
