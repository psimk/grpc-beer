import { Beer } from 'src/stubs';

const PORT = 6060;
const URL = `http://localhost:${PORT}`;

export default {
  getBeer: () => fetch(`${URL}/randomBeer`).then((response) => response.json()),
  submitBeer: (beer: Beer.AsObject) =>
    fetch(`${URL}/submitBeer`, { method: 'POST', body: JSON.stringify(beer) }).then((response) =>
      response.json(),
    ),
};
