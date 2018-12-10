import beerData from '../data/clean-beer.json';
import countries from '../data/countries.json';
import styles from '../data/styles.json';

export const checkAnswer = (beer: any): boolean =>
  !!beerData.find((beerItem) => beerItem === beer.toObject());

export const getRandomBeer = (): any => {
  const randomIndex = Math.floor(Math.random() * beerData.length);
  return beerData[randomIndex];
};

export const getCountries = (): string[] => countries;
export const getStyles = (): string[] => styles;
