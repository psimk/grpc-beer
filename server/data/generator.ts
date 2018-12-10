import * as fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const dataPath = './beer.json';
const dataOutputPath = './clean-beer.json';
const styleOutputPath = './styles.json';
const countryOutputPath = './countries.json';

interface IData {
  fields: {
    country: string;
    style_name: string;
    name: string;
    abv: number;
  };
}

(async () => {
  const data = await readFile(dataPath, 'utf8');
  const parsedData: IData[] = JSON.parse(data);

  const styles: string[] = [];
  const countries: string[] = [];

  const cleanData = parsedData
    .filter(({ fields: { style_name, abv } }) => style_name && abv)
    .map(({ fields: { country, style_name, name, abv } }) => {
      if (styles.indexOf(style_name) === -1) styles.push(style_name);
      if (countries.indexOf(country) === -1) countries.push(country);

      return {
        country,
        name,
        abv: parseFloat(abv.toFixed(2)),
        style: style_name,
        rating: Math.floor(Math.random() * 10 + 1),
      };
    });

  writeFile(dataOutputPath, JSON.stringify(cleanData, null, 2));
  writeFile(styleOutputPath, JSON.stringify(styles, null, 2));
  writeFile(countryOutputPath, JSON.stringify(countries, null, 2));
})();
