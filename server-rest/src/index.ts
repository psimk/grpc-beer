import * as bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import { getCountries, getRandomBeer, getStyles } from './util';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const allowCrossDomain = (_: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);

app.get('/randomBeer', (_, res) => {
  const beer = getRandomBeer();

  res.send(beer);
});

app.post('/submitBeer', (_, res) => {
  res.send({ result: Math.floor(Math.random()) });
});

const PORT = '6060';
app.listen(PORT, () => console.log('app running on port:', PORT));
