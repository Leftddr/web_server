var http = require('http');
var express = require('express');
var router = express.Router();
var fs = require('fs');

var server = http.createServer();

var host = '192.168.0.46';
var port = 8001;

server.listen(port, host, '50000', function(){
    console.log("web_server started");
});

server.on('connection', function(socket){
    var addr = socket.address();
    console.log("client is logined : %s, %d", addr.address, addr.port);
});

server.on('request', function(req, res){
    console.log("request is received");
    var filename = './html/login.html';
    var infile = fs.createReadStream(filename, {flags : 'r'});
    infile.pipe(res);
});

server.on('close', function(){
    console.log('connection closed');
});
