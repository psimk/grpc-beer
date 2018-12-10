import * as React from 'react';

import { CardContent, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import { express, grpc } from './service';
import { Beer } from './stubs';
import { beerFromObject } from './util';

interface IProps {
  isgRPC: boolean;
  isStream: boolean;
  delay: number;
}

export default React.forwardRef(({ isgRPC, isStream, delay }: IProps, ref) => {
  const [ beers, setBeers ] = React.useState<Beer[]>([]);
  const [ tempBeer, setTempBeer ] = React.useState<Beer>(new Beer());

  React.useEffect(
    () => {
      if (tempBeer.getName()) setBeers([ ...beers, tempBeer ]);
    },
    [ tempBeer ],
  );

  const addgRPCBeer = async () => {
    if (isStream) {
      const stream = grpc.getBeerStream(delay);
      stream.on('data', (beer: Beer) => {
        if (!isStream) stream.cancel();
        setTempBeer(beer);
      });
      return;
    }
    const beer = await grpc.getBeer();
    setBeers([ ...beers, beer ]);
  };

  const addExpressBeer = async () => {
    const beer = await express.getBeer();
    setBeers([ ...beers, beerFromObject(beer) ]);
  };

  React.useImperativeMethods(ref, () => ({
    clearBeers: () => setBeers([]),
    fetchBeer: () => (isgRPC ? addgRPCBeer() : addExpressBeer()),
  }));

  return (
    <Grid container={true} spacing={32} justify="space-evenly">
      {beers.map(BeerItem)}
    </Grid>
  );
});

const BeerItem = (beer: Beer) => (
  <Grid item={true}>
    <Card>
      <CardContent>
        <Typography gutterBottom={true} variant="subtitle1">
          Name: {beer.getName()}
        </Typography>
        <Typography gutterBottom={true}>Origin: {beer.getCountry()}</Typography>
        <Typography color="textSecondary">Type: {beer.getStyle()}</Typography>
      </CardContent>
    </Card>
  </Grid>
);
