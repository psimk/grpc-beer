// package: 
// file: beer_time.proto

var beer_time_pb = require("./beer_time_pb");
var grpc = require("grpc-web-client").grpc;

var BeerTime = (function () {
  function BeerTime() {}
  BeerTime.serviceName = "BeerTime";
  return BeerTime;
}());

BeerTime.SubmitAnswer = {
  methodName: "SubmitAnswer",
  service: BeerTime,
  requestStream: false,
  responseStream: false,
  requestType: beer_time_pb.Beer,
  responseType: beer_time_pb.AnswerResult
};

BeerTime.RandomBeerStream = {
  methodName: "RandomBeerStream",
  service: BeerTime,
  requestStream: false,
  responseStream: true,
  requestType: beer_time_pb.BeerRequest,
  responseType: beer_time_pb.Beer
};

BeerTime.RandomBeer = {
  methodName: "RandomBeer",
  service: BeerTime,
  requestStream: false,
  responseStream: false,
  requestType: beer_time_pb.BeerRequest,
  responseType: beer_time_pb.Beer
};

BeerTime.CountryData = {
  methodName: "CountryData",
  service: BeerTime,
  requestStream: false,
  responseStream: false,
  requestType: beer_time_pb.ConfigRequest,
  responseType: beer_time_pb.Countries
};

BeerTime.StyleData = {
  methodName: "StyleData",
  service: BeerTime,
  requestStream: false,
  responseStream: false,
  requestType: beer_time_pb.ConfigRequest,
  responseType: beer_time_pb.Styles
};

exports.BeerTime = BeerTime;

function BeerTimeClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BeerTimeClient.prototype.submitAnswer = function submitAnswer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BeerTime.SubmitAnswer, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BeerTimeClient.prototype.randomBeerStream = function randomBeerStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(BeerTime.RandomBeerStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.end.forEach(function (handler) {
        handler();
      });
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

BeerTimeClient.prototype.randomBeer = function randomBeer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BeerTime.RandomBeer, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BeerTimeClient.prototype.countryData = function countryData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BeerTime.CountryData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BeerTimeClient.prototype.styleData = function styleData(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BeerTime.StyleData, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.BeerTimeClient = BeerTimeClient;

