const mongoose = require('mongoose');
const env = require('./environment/environment');

mongoose.Promise = global.Promise;

const mongoUri = `mongodb://localhost:${env.port}`;

function connect() {
    return mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = {
    connect,
    mongoose
};
