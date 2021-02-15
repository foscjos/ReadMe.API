
function health(req, res) {
    res.json({status: 'API is healthy - please check on DB'}).status(200).send();
}

function databaseHealth(req, res) {
    res.json({status: 'API is healthy - please check on DB'}).status(200).send();
}

module.exports = { health, databaseHealth };