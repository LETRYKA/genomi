<div align="center">
  <img height="150" src="https://i.ibb.co/mSRnNY4/pngwing-com.png"  />
</div>

###

<h1 align="center">FakeGenomi</h1>

###

<p align="center">Generate fake data for testing and development.</p>

###

<div align="center">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=LETRYKA.LETRYKA&"  />
</div>

###

<h2 align="left">🎀  Features</h2>

###

<p align="left">🧍 Person - Generate Names<br>📍 Location - Generate City<br>⏰ Date - Generates fake birthdate</p>

###

<h2 align="left">📦 Install</h2>

###

```bash
npm install genomi
```

###

<h2 align="left">🪄 Usage</h2>

###

```ts
// ESM
import genomi from 'genomi'


//CJS
const { genomi } = require('genomi');


export function createRandomUser() {
    return {
        username: generateName(),
        birthdate: birthGenerator(),
        location: generateloc(),
    };
}


export const users = genomi(createRandomUser, 2);
```

###