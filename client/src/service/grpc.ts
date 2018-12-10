import { grpc } from 'grpc-web-client';
import { AnswerResult, Beer, BeerRequest, BeerTimeClient, ResponseStream } from '../stubs';

const enum Global {
  Client = 'grpcClient',
  MetaData = 'metaData',
}

const getClientAndMetaData = (): { client: BeerTimeClient; metaData: grpc.Metadata } => {
  let client = window[Global.Client];
  let metaData = window[Global.MetaData];

  if (!client || !metaData) {
    const port = '8080';
    const serverBind = `http://localhost:${port}`;

    client = new BeerTimeClient(serverBind);
    metaData = new grpc.Metadata();

    window[Global.Client] = client;
    window[Global.MetaData] = metaData;
  }

  return { client, metaData };
};

export default {
  getBeer: (): Promise<Beer> => {
    const { client } = getClientAndMetaData();
    const request = new BeerRequest();

    return new Promise<Beer>((resolve, reject) =>
      client.randomBeer(
        request,
        (error, response: Beer) => (error ? reject(error) : resolve(response)),
      ),
    );
  },

  submitBeer: (request: Beer): Promise<AnswerResult> => {
    const { client } = getClientAndMetaData();

    return new Promise<AnswerResult>((resolve, reject) =>
      client.submitAnswer(
        request,
        (error, response: AnswerResult) => (error ? reject(error) : resolve(response)),
      ),
    );
  },

  getBeerStream: (delay: number): ResponseStream<Beer> => {
    const { client } = getClientAndMetaData();
    const request = new BeerRequest();
    request.setDelay(delay);

    return client.randomBeerStream(request);
  },
};
