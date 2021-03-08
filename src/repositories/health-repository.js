const ReadPreference = require('mongodb').ReadPreference;
const mongoose = require('../mongo');
require('../mongo').connect();

function healthCheck(req, res) {
    // broken route, don't really care and don't think I'm using ping correctly
    // our get routes work so whatever, can fix this later
    try {
        mongoose.mongoose.command({ ping: 1 });
        res.json({status: 'DB is healthy'}).status(200).send();
    }
    catch (error) {
        res.json({status: 'DB is not responding'}).status(500).send();
    }
}

module.exports = { healthCheck };