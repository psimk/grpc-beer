// package: 
// file: beer_time.proto

import * as beer_time_pb from "./beer_time_pb";
import {grpc} from "grpc-web-client";

type BeerTimeSubmitAnswer = {
  readonly methodName: string;
  readonly service: typeof BeerTime;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof beer_time_pb.Beer;
  readonly responseType: typeof beer_time_pb.AnswerResult;
};

type BeerTimeRandomBeerStream = {
  readonly methodName: string;
  readonly service: typeof BeerTime;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof beer_time_pb.BeerRequest;
  readonly responseType: typeof beer_time_pb.Beer;
};

type BeerTimeRandomBeer = {
  readonly methodName: string;
  readonly service: typeof BeerTime;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof beer_time_pb.BeerRequest;
  readonly responseType: typeof beer_time_pb.Beer;
};

type BeerTimeCountryData = {
  readonly methodName: string;
  readonly service: typeof BeerTime;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof beer_time_pb.ConfigRequest;
  readonly responseType: typeof beer_time_pb.Countries;
};

type BeerTimeStyleData = {
  readonly methodName: string;
  readonly service: typeof BeerTime;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof beer_time_pb.ConfigRequest;
  readonly responseType: typeof beer_time_pb.Styles;
};

export class BeerTime {
  static readonly serviceName: string;
  static readonly SubmitAnswer: BeerTimeSubmitAnswer;
  static readonly RandomBeerStream: BeerTimeRandomBeerStream;
  static readonly RandomBeer: BeerTimeRandomBeer;
  static readonly CountryData: BeerTimeCountryData;
  static readonly StyleData: BeerTimeStyleData;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class BeerTimeClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  submitAnswer(
    requestMessage: beer_time_pb.Beer,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: beer_time_pb.AnswerResult|null) => void
  ): UnaryResponse;
  submitAnswer(
    requestMessage: beer_time_pb.Beer,
    callback: (error: ServiceError|null, responseMessage: beer_time_pb.AnswerResult|null) => void
  ): UnaryResponse;
  randomBeerStream(requestMessage: beer_time_pb.BeerRequest, metadata?: grpc.Metadata): ResponseStream<beer_time_pb.Beer>;
  randomBeer(
    requestMessage: beer_time_pb.BeerRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: beer_time_pb.Beer|null) => void
  ): UnaryResponse;
  randomBeer(
    requestMessage: beer_time_pb.BeerRequest,
    callback: (error: ServiceError|null, responseMessage: beer_time_pb.Beer|null) => void
  ): UnaryResponse;
  countryData(
    requestMessage: beer_time_pb.ConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: beer_time_pb.Countries|null) => void
  ): UnaryResponse;
  countryData(
    requestMessage: beer_time_pb.ConfigRequest,
    callback: (error: ServiceError|null, responseMessage: beer_time_pb.Countries|null) => void
  ): UnaryResponse;
  styleData(
    requestMessage: beer_time_pb.ConfigRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: beer_time_pb.Styles|null) => void
  ): UnaryResponse;
  styleData(
    requestMessage: beer_time_pb.ConfigRequest,
    callback: (error: ServiceError|null, responseMessage: beer_time_pb.Styles|null) => void
  ): UnaryResponse;
}

