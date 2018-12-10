import * as React from 'react';

import { Button, TextField } from '@material-ui/core';

import { express, grpc } from './service';
import { AnswerResult, Beer, Result } from './stubs';

import Typography from '@material-ui/core/Typography';

interface IProps {
  isgRPC: boolean;
}

export default ({ isgRPC }: IProps) => {
  const [ result, setResult ] = React.useState<AnswerResult>(new AnswerResult());
  const [ beer, setBeer ] = React.useState<Beer>(new Beer());

  const submitgRPCBeer = async () => {
    const responseResult = await grpc.submitBeer(beer);
    setResult(responseResult);
  };

  const submitExpressBeer = async () => {
    const response = await express.submitBeer(beer.toObject());
    const responseResult = new AnswerResult();

    if (response.result === 1) responseResult.setResult(Result.CORRECT);
    else responseResult.setResult(Result.INCORRECT);

    setResult(responseResult);
  };

  const onTextChange = (type: string) => ({ target }: any) => {
    if (type === 'name') beer.setName(target.value);
    else beer.setStyle(target.value);
    setBeer(beer);
  };

  return (
    <React.Fragment>
      <TextField
        label="Name"
        value={beer.getName()}
        onChange={onTextChange('name')}
        margin="normal"
      />
      <TextField
        label="Style"
        value={beer.getStyle()}
        onChange={onTextChange('style')}
        margin="normal"
      />
      <Button onClick={isgRPC ? submitgRPCBeer : submitExpressBeer} variant="outlined">
        Submit
      </Button>
      <Typography>{result.getResult() && result.getResult()}</Typography>
    </React.Fragment>
  );
};
