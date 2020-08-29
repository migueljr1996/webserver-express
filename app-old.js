const htpp = require('http');

htpp.createServer((req, res) => {
        res.write('hola mundo');
        res.end();

    })
    .listen(4200);
console.log('Puertopasdasd ')