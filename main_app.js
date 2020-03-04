var http = require('http');

var server = http.createServer();

var host = '192.168.0.46';
var port = 8001;

server.listen(port, host, '50000', function(){
    console.log("web_server started");
});

console.log('hhi');
