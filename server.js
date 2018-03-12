'use strict';

const express = require('express');
require('dotenv').config();

console.log(process.env);

// Constants
const PORT = process.env.SERVER_PORT || 8080;
const HOST = process.env.SERVER_HOST|| '0.0.0.0';

// App
const app = express();


var routes = {
    civic: require( './lib/routes/civic' ),
    test: require( './lib/routes/test' )
};


// Routes
app.use( '/civic', routes.civic );
app.use( '/',  routes.test  );



app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);