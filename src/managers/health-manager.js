const healthRepo = require('../repositories/health-repository');

function health(req, res) {
    res.json({status: 'API is healthy - please check on DB'}).status(200).send();
}

function databaseHealth(req, res) {
    healthRepo.healthCheck(req, res);
}

module.exports = { health, databaseHealth };