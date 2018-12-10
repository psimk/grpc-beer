// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var beer_time_pb = require('./beer_time_pb.js');

function serialize_AnswerResult(arg) {
  if (!(arg instanceof beer_time_pb.AnswerResult)) {
    throw new Error('Expected argument of type AnswerResult');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_AnswerResult(buffer_arg) {
  return beer_time_pb.AnswerResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Beer(arg) {
  if (!(arg instanceof beer_time_pb.Beer)) {
    throw new Error('Expected argument of type Beer');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Beer(buffer_arg) {
  return beer_time_pb.Beer.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_BeerRequest(arg) {
  if (!(arg instanceof beer_time_pb.BeerRequest)) {
    throw new Error('Expected argument of type BeerRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_BeerRequest(buffer_arg) {
  return beer_time_pb.BeerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ConfigRequest(arg) {
  if (!(arg instanceof beer_time_pb.ConfigRequest)) {
    throw new Error('Expected argument of type ConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ConfigRequest(buffer_arg) {
  return beer_time_pb.ConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Countries(arg) {
  if (!(arg instanceof beer_time_pb.Countries)) {
    throw new Error('Expected argument of type Countries');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Countries(buffer_arg) {
  return beer_time_pb.Countries.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Styles(arg) {
  if (!(arg instanceof beer_time_pb.Styles)) {
    throw new Error('Expected argument of type Styles');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_Styles(buffer_arg) {
  return beer_time_pb.Styles.deserializeBinary(new Uint8Array(buffer_arg));
}


var BeerTimeService = exports.BeerTimeService = {
  submitAnswer: {
    path: '/BeerTime/SubmitAnswer',
    requestStream: false,
    responseStream: false,
    requestType: beer_time_pb.Beer,
    responseType: beer_time_pb.AnswerResult,
    requestSerialize: serialize_Beer,
    requestDeserialize: deserialize_Beer,
    responseSerialize: serialize_AnswerResult,
    responseDeserialize: deserialize_AnswerResult,
  },
  randomBeerStream: {
    path: '/BeerTime/RandomBeerStream',
    requestStream: false,
    responseStream: true,
    requestType: beer_time_pb.BeerRequest,
    responseType: beer_time_pb.Beer,
    requestSerialize: serialize_BeerRequest,
    requestDeserialize: deserialize_BeerRequest,
    responseSerialize: serialize_Beer,
    responseDeserialize: deserialize_Beer,
  },
  randomBeer: {
    path: '/BeerTime/RandomBeer',
    requestStream: false,
    responseStream: false,
    requestType: beer_time_pb.BeerRequest,
    responseType: beer_time_pb.Beer,
    requestSerialize: serialize_BeerRequest,
    requestDeserialize: deserialize_BeerRequest,
    responseSerialize: serialize_Beer,
    responseDeserialize: deserialize_Beer,
  },
  countryData: {
    path: '/BeerTime/CountryData',
    requestStream: false,
    responseStream: false,
    requestType: beer_time_pb.ConfigRequest,
    responseType: beer_time_pb.Countries,
    requestSerialize: serialize_ConfigRequest,
    requestDeserialize: deserialize_ConfigRequest,
    responseSerialize: serialize_Countries,
    responseDeserialize: deserialize_Countries,
  },
  styleData: {
    path: '/BeerTime/StyleData',
    requestStream: false,
    responseStream: false,
    requestType: beer_time_pb.ConfigRequest,
    responseType: beer_time_pb.Styles,
    requestSerialize: serialize_ConfigRequest,
    requestDeserialize: deserialize_ConfigRequest,
    responseSerialize: serialize_Styles,
    responseDeserialize: deserialize_Styles,
  },
};

exports.BeerTimeClient = grpc.makeGenericClientConstructor(BeerTimeService);
