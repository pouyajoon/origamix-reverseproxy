var node_reverse_proxy = require('node-reverse-proxy');

var ip = '127.0.0.1';
var reverse_proxy = new node_reverse_proxy({
    'karma.pouya' : ip + ':8082',
    'moa.pouya' : ip + ':8081', 
    'pouya' : ip + ':8082',
    '' : ip + ':8080'
});

reverse_proxy.start(80);
