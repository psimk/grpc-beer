"use strict";
exports.__esModule = true;
var grpc = require("grpc");
var stubs_1 = require("../stubs");
var host = 'localhost';
var port = '8080';
var serverBind = host + ":" + port;
var client = new stubs_1.GochiClient(serverBind, grpc.credentials.createInsecure());
var metaData = new grpc.Metadata();
client.getData(new stubs_1.GetDataRequest(), metaData, function (err, res) {
    if (err)
        console.error(err);
    else
        console.log(res);
});
