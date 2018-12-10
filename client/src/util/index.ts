import { Beer } from '../stubs';

export const beerFromObject = (beer: Beer.AsObject): Beer => {
  const instance = new Beer();

  instance.setName(beer.name);
  instance.setAbv(beer.abv);
  instance.setCountry(beer.country);
  instance.setStyle(beer.style);

  return instance;
};
