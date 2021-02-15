const router = require('express').Router();
const healthManager = require('../managers/health');

router.get('/health', (req, res) => {
    healthManager.health(req, res);
});

router.get('/health/database', (req, res) => {
    healthManager.databaseHealth(req, res);
});

module.exports = router;