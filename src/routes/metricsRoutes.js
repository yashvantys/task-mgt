const { Router } = require('express');
const router = Router();

module.exports = (db) => {
    const metricsController = require('../controllers/metricsController')(db);

    router.get('/', metricsController.getTaskMetrics);

    return router;
};