'use strict';

/**
 * Module dependencies.
 */

const app   = require( './app' );
const debug = require( 'debug' )( 'dev-utils:server' );
const error = require( 'debug' )( 'app:error' );
const http  = require( 'http' );

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort( process.env.PORT || '3030' );

app.set( 'port', port );

/**
 * Create HTTP server.
 */

const server = http.createServer( app );

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen( port );
server.on( 'error', onError );
server.on( 'listening', onListening );

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort ( val ) {
    const p = parseInt( val, 10 );

    if ( isNaN( p ) ) {
        // named pipe
        return val;
    }

    if ( p >= 0 ) {
        // port number
        return p;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError ( err ) {
    if ( err.syscall !== 'listen' ) {
        throw err;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch ( err.code ) {
        case 'EACCES':
            error( bind + ' requires elevated privileges' );
            process.exit( 1 );
            break;
        case 'EADDRINUSE':
            error( bind + ' is already in use' );
            process.exit( 1 );
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening () {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;

    debug( 'Listening on ' + bind );
}
