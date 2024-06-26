const app = require("./backend/app")
const debug = require("debug")("node-angular");
const http = require('http');

const normalizePort = val => {
    val = parseInt(val, 10);    
    if (isNaN(val)) {
        // named pipe
        return val;
    }
    if (val >= 0) {
        // port number
        return val;
    }
    return false;
}

const onError = error => {
    if (error.syscall!== 'listen') {
        throw error;
    }
    const bind = typeof port ==='string'
       ? 'Pipe'+ port
        : 'Port'+ port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind +'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind +'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr ==='string'
       ? 'pipe'+ addr
        : 'port'+ addr.port;
    console.log('Listening on '+ bind);
}

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
