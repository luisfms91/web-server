const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200,'application/json');
    res.write('response');
    res.end();
}).listen(8181);

console.log('escuchando desde 8181');