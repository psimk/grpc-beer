import { EventEmitter } from 'events';
import beerData from '../data/clean-beer.json';
import countries from '../data/countries.json';
import styles from '../data/styles.json';
import { Beer, Countries } from './stubs';

export class LocalCountries extends Countries {
  constructor(countryArray: string[]) {
    super();
    this.setCountriesList(countryArray);
  }
}

export const checkAnswer = (beer: Beer): boolean =>
  !!beerData.find((beerItem) => beerItem === beer.toObject());

export const getRandomBeer = (): Beer.AsObject => {
  const randomIndex = Math.floor(Math.random() * beerData.length);
  return beerData[randomIndex];
};

export const beerFromObject = (beer: Beer.AsObject): Beer => {
  const instance = new Beer();

  instance.setName(beer.name);
  instance.setAbv(beer.abv);
  instance.setCountry(beer.country);
  instance.setStyle(beer.style);

  return instance;
};

export const getCountries = (): string[] => countries;
export const getStyles = (): string[] => styles;

export const createBeerStream = (delay: number): EventEmitter => {
  const emitter = new EventEmitter();
  let cancel = false;

  const requestNext = (index = 0) => {
    setTimeout(() => {
      if (cancel) return;
      console.log(index);
      emitter.emit('data', beerData[index]);
      if (index + 1 <= beerData.length) requestNext(index + 1);
    }, delay);
  };

  emitter.on('end', () => {
    cancel = true;
  });

  requestNext();

  return emitter;
};
