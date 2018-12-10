// package: 
// file: beer_time.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as beer_time_pb from "./beer_time_pb";

interface IBeerTimeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    submitAnswer: IBeerTimeService_ISubmitAnswer;
    randomBeerStream: IBeerTimeService_IRandomBeerStream;
    randomBeer: IBeerTimeService_IRandomBeer;
    countryData: IBeerTimeService_ICountryData;
    styleData: IBeerTimeService_IStyleData;
}

interface IBeerTimeService_ISubmitAnswer extends grpc.MethodDefinition<beer_time_pb.Beer, beer_time_pb.AnswerResult> {
    path: string; // "/.BeerTime/SubmitAnswer"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<beer_time_pb.Beer>;
    requestDeserialize: grpc.deserialize<beer_time_pb.Beer>;
    responseSerialize: grpc.serialize<beer_time_pb.AnswerResult>;
    responseDeserialize: grpc.deserialize<beer_time_pb.AnswerResult>;
}
interface IBeerTimeService_IRandomBeerStream extends grpc.MethodDefinition<beer_time_pb.BeerRequest, beer_time_pb.Beer> {
    path: string; // "/.BeerTime/RandomBeerStream"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<beer_time_pb.BeerRequest>;
    requestDeserialize: grpc.deserialize<beer_time_pb.BeerRequest>;
    responseSerialize: grpc.serialize<beer_time_pb.Beer>;
    responseDeserialize: grpc.deserialize<beer_time_pb.Beer>;
}
interface IBeerTimeService_IRandomBeer extends grpc.MethodDefinition<beer_time_pb.BeerRequest, beer_time_pb.Beer> {
    path: string; // "/.BeerTime/RandomBeer"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<beer_time_pb.BeerRequest>;
    requestDeserialize: grpc.deserialize<beer_time_pb.BeerRequest>;
    responseSerialize: grpc.serialize<beer_time_pb.Beer>;
    responseDeserialize: grpc.deserialize<beer_time_pb.Beer>;
}
interface IBeerTimeService_ICountryData extends grpc.MethodDefinition<beer_time_pb.ConfigRequest, beer_time_pb.Countries> {
    path: string; // "/.BeerTime/CountryData"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<beer_time_pb.ConfigRequest>;
    requestDeserialize: grpc.deserialize<beer_time_pb.ConfigRequest>;
    responseSerialize: grpc.serialize<beer_time_pb.Countries>;
    responseDeserialize: grpc.deserialize<beer_time_pb.Countries>;
}
interface IBeerTimeService_IStyleData extends grpc.MethodDefinition<beer_time_pb.ConfigRequest, beer_time_pb.Styles> {
    path: string; // "/.BeerTime/StyleData"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<beer_time_pb.ConfigRequest>;
    requestDeserialize: grpc.deserialize<beer_time_pb.ConfigRequest>;
    responseSerialize: grpc.serialize<beer_time_pb.Styles>;
    responseDeserialize: grpc.deserialize<beer_time_pb.Styles>;
}

export const BeerTimeService: IBeerTimeService;

export interface IBeerTimeServer {
    submitAnswer: grpc.handleUnaryCall<beer_time_pb.Beer, beer_time_pb.AnswerResult>;
    randomBeerStream: grpc.handleServerStreamingCall<beer_time_pb.BeerRequest, beer_time_pb.Beer>;
    randomBeer: grpc.handleUnaryCall<beer_time_pb.BeerRequest, beer_time_pb.Beer>;
    countryData: grpc.handleUnaryCall<beer_time_pb.ConfigRequest, beer_time_pb.Countries>;
    styleData: grpc.handleUnaryCall<beer_time_pb.ConfigRequest, beer_time_pb.Styles>;
}

export interface IBeerTimeClient {
    submitAnswer(request: beer_time_pb.Beer, callback: (error: grpc.ServiceError | null, response: beer_time_pb.AnswerResult) => void): grpc.ClientUnaryCall;
    submitAnswer(request: beer_time_pb.Beer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: beer_time_pb.AnswerResult) => void): grpc.ClientUnaryCall;
    submitAnswer(request: beer_time_pb.Beer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: beer_time_pb.AnswerResult) => void): grpc.ClientUnaryCall;
    randomBeerStream(request: beer_time_pb.BeerRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<beer_time_pb.Beer>;
    randomBeerStream(request: beer_time_pb.BeerRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<beer_time_pb.Beer>;
    randomBeer(request: beer_time_pb.BeerRequest, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Beer) => void): grpc.ClientUnaryCall;
    randomBeer(request: beer_time_pb.BeerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Beer) => void): grpc.ClientUnaryCall;
    randomBeer(request: beer_time_pb.BeerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Beer) => void): grpc.ClientUnaryCall;
    countryData(request: beer_time_pb.ConfigRequest, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Countries) => void): grpc.ClientUnaryCall;
    countryData(request: beer_time_pb.ConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Countries) => void): grpc.ClientUnaryCall;
    countryData(request: beer_time_pb.ConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Countries) => void): grpc.ClientUnaryCall;
    styleData(request: beer_time_pb.ConfigRequest, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Styles) => void): grpc.ClientUnaryCall;
    styleData(request: beer_time_pb.ConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Styles) => void): grpc.ClientUnaryCall;
    styleData(request: beer_time_pb.ConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Styles) => void): grpc.ClientUnaryCall;
}

export class BeerTimeClient extends grpc.Client implements IBeerTimeClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public submitAnswer(request: beer_time_pb.Beer, callback: (error: grpc.ServiceError | null, response: beer_time_pb.AnswerResult) => void): grpc.ClientUnaryCall;
    public submitAnswer(request: beer_time_pb.Beer, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: beer_time_pb.AnswerResult) => void): grpc.ClientUnaryCall;
    public submitAnswer(request: beer_time_pb.Beer, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: beer_time_pb.AnswerResult) => void): grpc.ClientUnaryCall;
    public randomBeerStream(request: beer_time_pb.BeerRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<beer_time_pb.Beer>;
    public randomBeerStream(request: beer_time_pb.BeerRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<beer_time_pb.Beer>;
    public randomBeer(request: beer_time_pb.BeerRequest, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Beer) => void): grpc.ClientUnaryCall;
    public randomBeer(request: beer_time_pb.BeerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Beer) => void): grpc.ClientUnaryCall;
    public randomBeer(request: beer_time_pb.BeerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Beer) => void): grpc.ClientUnaryCall;
    public countryData(request: beer_time_pb.ConfigRequest, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Countries) => void): grpc.ClientUnaryCall;
    public countryData(request: beer_time_pb.ConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Countries) => void): grpc.ClientUnaryCall;
    public countryData(request: beer_time_pb.ConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Countries) => void): grpc.ClientUnaryCall;
    public styleData(request: beer_time_pb.ConfigRequest, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Styles) => void): grpc.ClientUnaryCall;
    public styleData(request: beer_time_pb.ConfigRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Styles) => void): grpc.ClientUnaryCall;
    public styleData(request: beer_time_pb.ConfigRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: beer_time_pb.Styles) => void): grpc.ClientUnaryCall;
}
