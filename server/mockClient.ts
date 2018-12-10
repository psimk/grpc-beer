// import * as grpc from 'grpc';
// import { Beer, BeerRequest, BeerTimeClient, ConfigRequest } from './src/stubs';

// const port = '9090';
// const serverBind = `0.0.0.0:${port}`;

// const client = new BeerTimeClient(serverBind, grpc.credentials.createInsecure());
// const metaData = new grpc.Metadata();

// client.randomBeer(new BeerRequest(), metaData, (err, res) => {
//   if (err) return console.error(err);
//   res.getName();
//   res.getRating();
//   console.log(res.toObject());
// });

// // client.randomBeerStream(new BeerRequest(), metaData).on('data', (chunk: Beer) => {
// //   console.log(chunk.getName());
// //   console.log(chunk.getAbv());
// //   console.log(chunk.getCountry());
// //   console.log(chunk.getRating());
// //   console.log(chunk.getStyle());
// // });

// // // const requestCountries = () => {
// //   const now = performance.now();

// //   client.countryData(new ConfigRequest(), (err, response) => {
// //     if (err) return console.log(err);
// //     console.log(response);
// //     console.log(performance.now() - now);
// //   });
// // };

// // requestCountries();
