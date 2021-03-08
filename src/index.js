const express = require('express');
const app = express();

const PORT = 3001;

/**
 * Routes.
 */
const healthRouter = require('./services/health-service');
const bookRouter = require('./services/book-service');

// parses incoming requests with JSON payloads
app.use(express.json());// parses incoming requests with urlencoded payloads
// extended: true - parsing the URL-encoded data with the querystring library
app.use(express.urlencoded({extended: true}));

app.use('/api/v1', healthRouter);
app.use('/api/v1', bookRouter);

function onStart(){
    console.log(`Server running on port ${PORT}`);
}

app.listen(PORT, onStart);

module.exports = app;