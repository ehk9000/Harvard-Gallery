const express = require('express');
require('dotenv').config()
const app = express();
const path = require('path');
const serveStatic = require('serve-static');

app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;

app.listen(port);

console.log('Server running ⚡️ on port ' + port);
