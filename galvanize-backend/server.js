var http = require('http');
const HOST = 'localhost';
const PORT = 3001;

const server = http.createServer((request, response) => {
    let urll = request.url.split('/');
        if (urll[1] === 'Home' ) {
          if (request.method === 'GET') {
            response.end("Hello Galvanize!");
          }
        }
        response.statusCode = 404;
        response.end();
    });
    
      server.listen(3001, "localhost", () => {
        console.log(`Server running at ${HOST}:${PORT}`);
      });