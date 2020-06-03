const http = require('http');

const app = require('./app');

server = http.createServer(app);

server.listen(4000, () => {
    console.log('Server is not running on port: 4000');
});
