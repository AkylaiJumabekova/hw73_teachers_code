const http = require('http');
const port = 8000;

const server = http.createServer((request, response) => {
    console.log('Connection successful!');
    console.log('HTTP Method:', request.method);
    console.log('HTTP URL:', request.url);

    if (request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('<h1>Homepage!</h1>');
    } else if (request.url === '/about') {
        response.writeHead(200);
        response.end('About Page!');
    } else {
        response.writeHead(404);
        response.end('Not Found!');
    }
});

server.listen(port);
console.log(`Server running at http://127.0.0.1:${port}`);




// npm init -y, посое этого поменять файл main на index.js, script { start: node index.js}
//npm i express
// npm i --save-dev nodemon
// npm run dev
// download postman (приложение для тестирования запросов) - посоветовали скачать
