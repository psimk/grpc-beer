import * as grpc from 'grpc';
import { AnswerResult, Beer, BeerTimeService, IBeerTimeServer, Result, Styles } from './stubs';
import {
  beerFromObject,
  checkAnswer,
  createBeerStream,
  getCountries,
  getRandomBeer,
  getStyles,
  LocalCountries,
} from './util';

const server = new grpc.Server();

const rpc: IBeerTimeServer = {
  submitAnswer: (call, callback) => {
    // const isCorrect = checkAnswer(call.request);
    const response = new AnswerResult();

    response.setResult(Math.floor(Math.random()) ? Result.CORRECT : Result.INCORRECT);

    callback(null, response);
  },
  randomBeer: (_, callback) => {
    const response = beerFromObject(getRandomBeer());

    callback(null, response);
  },
  randomBeerStream: (call) => {
    const { request } = call;
    const delay = request.getDelay() || 1000;

    const beerEmitter = createBeerStream(delay);

    beerEmitter.on('data', (beerObj: Beer.AsObject) => {
      if (beerObj) call.write(beerFromObject(beerObj));
    });
    beerEmitter.on('err', () => call.end());

    call.on('error', (err) => {
      console.log(err);
      call.end();
      beerEmitter.emit('end', err);
    });
  },
  countryData: (_, callback) => {
    const response = new LocalCountries(getCountries());

    callback(null, response);
  },
  styleData: (_, callback) => {
    const response = new Styles();

    response.setStylesList(getStyles());

    callback(null, response);
  },
};

server.addService(BeerTimeService, rpc);

const port = '9090';
const bound = server.bind(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure());

server.start();

console.log(`Bound to ${bound}`);
console.log(`Running on 0.0.0.0:${port}`);
