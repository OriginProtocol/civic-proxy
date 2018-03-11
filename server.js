'use strict';

const express = require('express');
require('dotenv').config();

console.log(process.env);

// Constants
const PORT = process.env.SERVER_PORT || 8080;
const HOST = process.env.SERVER_HOST|| '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('civic-proxy\n');
});






app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);